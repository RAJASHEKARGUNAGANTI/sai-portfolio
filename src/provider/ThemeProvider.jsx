// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the initial state
const initialState = {
  theme: "system",
  setTheme: function() { return null; },
};

// Create the ThemeProvider context
const ThemeProviderContext = createContext(initialState);

// Define the ThemeProvider component
function ThemeProvider(props) {
  // eslint-disable-next-line react/prop-types
  var children = props.children;
  // eslint-disable-next-line react/prop-types
  var defaultTheme = props.defaultTheme === undefined ? "system" : props.defaultTheme;
  // eslint-disable-next-line react/prop-types
  var storageKey = props.storageKey === undefined ? "vite-ui-theme" : props.storageKey;

  var [theme, setTheme] = useState(function() {
    return localStorage.getItem(storageKey) || defaultTheme;
  });

  useEffect(function() {
    var root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  var value = {
    theme: theme,
    setTheme: function(newTheme) {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Define the useTheme hook
function useTheme() {
  var context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

// Export the ThemeProvider and useTheme
export  { ThemeProvider, useTheme };
