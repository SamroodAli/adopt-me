import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]); //what its type is going to be,from useState, a string and a function

export default ThemeContext;
