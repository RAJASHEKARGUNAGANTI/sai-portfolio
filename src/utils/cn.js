// Importing the necessary modules
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Defining the cn function
export function cn() {
  // Converting the arguments object to an array
  var inputs = Array.prototype.slice.call(arguments);

  // Using clsx to concatenate class names
  var classNames = clsx(inputs);

  // Merging the class names with tailwind-merge
  return twMerge(classNames);
}
