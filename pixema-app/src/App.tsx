import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ThemeProvider from "./components/context/theme/provider";
import Router from "./pages/router";
import { setThemeValue, themeSelectors } from "./redux/reducers/themeSlicer";
import { Theme } from "./@types";

function App() {
  const dispatch = useDispatch();

  const themeValue = useSelector(themeSelectors.getThemeValue);
  const onChangeTheme = (value: Theme) => () => {
    dispatch(setThemeValue(value));
  };
  return (
    <ThemeProvider themeValue={themeValue} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
