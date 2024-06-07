// Importing the necessary modules
import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{ts,tsx,js,jsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      'custom-1': 'rgb(13,11,40)',
      'custom-2': 'rgb(16,16,62)',
      'custom-3': 'rgb(7,47,80)',
    },
    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
      scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
      spotlight: {
        "0%": {
          opacity: 0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: 1,
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export const plugins = [
  addVariablesForColors,
  function (params) {
    var matchUtilities = params.matchUtilities;
    var theme = params.theme;

    matchUtilities(
      {
        "bg-grid": function (value) {
          return {
            backgroundImage: 'url("' + svgToDataUri(
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="' + value + '"><path d="M0 .5H31.5V32"/></svg>'
            ) + '")',
          };
        },
        "bg-grid-small": function (value) {
          return {
            backgroundImage: 'url("' + svgToDataUri(
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="' + value + '"><path d="M0 .5H31.5V32"/></svg>'
            ) + '")',
          };
        },
        "bg-dot": function (value) {
          return {
            backgroundImage: 'url("' + svgToDataUri(
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="' + value + '" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>'
            ) + '")',
          };
        },
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  },
];

// Defining the addVariablesForColors function
function addVariablesForColors(params) {
  var addBase = params.addBase;
  var theme = params.theme;

  var allColors = flattenColorPalette(theme("colors"));
  
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });

}
