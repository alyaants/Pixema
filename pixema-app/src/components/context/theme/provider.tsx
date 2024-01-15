import { FC } from "react";
import ThemeContext from "./context";
import { Children, Theme } from "../../../@types";

interface ThemeProviderProps {
  children: Children;
  themeValue: Theme;
  onChangeTheme: (value: Theme) => () => void;
}
const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  themeValue,
  onChangeTheme,
}) => {
  return (
    <ThemeContext.Provider value={{ themeValue, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
