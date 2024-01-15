import { createContext, useContext } from "react";
import { Theme } from "../../../@types";

const initialValues = {
  themeValue: Theme.Dark,
  onChangeTheme: (_: Theme) => () => {},
};

const ThemeContext = createContext(initialValues);

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;