import { useDispatch, useSelector } from "react-redux";

import {
  updateExpression,
  updateHistory,
  setInvalidInputFormat,
  setTheme,
  setInputValue,
} from "@store/actions/actions";

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
  };

  const clearAll = () => {
    dispatch(updateExpression([]));
    dispatch(setInputValue("0"));

    clearHistory();

    dispatch(setInvalidInputFormat(false));
  };

  const toggleTheme = (value) => () => {
    dispatch(setTheme(value));
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
          <SettingsItem onClick={toggleTheme(THEMES.light)}>
            Light Theme
          </SettingsItem>
          <SettingsItem onClick={toggleTheme(THEMES.dark)}>
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
