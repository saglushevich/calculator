import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import HomeFCPage from "@pages/HomeFCPage";
import HomeCCPage from "@pages/HomeCCPage";
import SettingsPage from "@pages/SettingsPage";
import GlobalStyles from "@styles/styles";
import { ROUTES, THEMES, LIGHT_COLORS, DARK_COLORS } from "@constants";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider
      theme={theme === THEMES.DARK_THEME ? DARK_COLORS : LIGHT_COLORS}
    >
      <Router>
        <Routes>
          <Route path={ROUTES.functionCalc} element={<HomeFCPage />} />
          <Route path={ROUTES.classCalc} element={<HomeCCPage />} />
          <Route path={ROUTES.settings} element={<SettingsPage />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
