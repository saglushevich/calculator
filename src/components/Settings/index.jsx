import { useDispatch, useSelector } from "react-redux";

import {
  updateExpression,
  updateHistory,
  setInvalidInputFormat,
  setTheme,
  setInputValue,
} from "@store/actions/actions";
import THEMES from "@constants/themes";

import {
  SettingsContainer,
  SettingsTitle,
  SettingsDropdawn,
  SettingsSelected,
  SettingsContent,
  SettingsItem,
  SettingsSubtitle,
  SettingsButton,
} from "./styled";

function Settings() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const clearHistory = () => {
    dispatch(updateHistory([]));
    localStorage.removeItem("history");
  };

  const clearAll = () => {
    dispatch(updateExpression([]));
    dispatch(setInputValue("0"));

    clearHistory();

    dispatch(setInvalidInputFormat(false));
  };

  const toggleTheme = (value) => {
    dispatch(setTheme(value));
    localStorage.setItem("theme", value);
  };

  return (
    <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>
      <SettingsDropdawn>
        <SettingsSubtitle>Switch Theme</SettingsSubtitle>
        <SettingsSelected>
          {theme[0].toUpperCase() + theme.slice(1).toLowerCase() + " Theme"}
        </SettingsSelected>
        <SettingsContent type="settingsContent">
          <SettingsItem onClick={() => toggleTheme(THEMES.LIGHT_THEME)}>
            Light Theme
          </SettingsItem>
          <SettingsItem onClick={() => toggleTheme(THEMES.DARK_THEME)}>
            Dark Theme
          </SettingsItem>
        </SettingsContent>
      </SettingsDropdawn>

      <SettingsButton onClick={clearHistory}>Clear History</SettingsButton>
      <SettingsButton onClick={clearAll}>Clear All</SettingsButton>
    </SettingsContainer>
  );
}

export default Settings;
