import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import HomeFCPage from "@pages/HomeFCPage";
import HomeCCPage from "@pages/HomeCCPage";
import SettingsPage from "@pages/SettingsPage";
import GlobalStyles from "@styles/styles";
import { LIGHT, DARK } from "@constants/theme";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === "DARK" ? DARK : LIGHT}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeFCPage />} />
          <Route path="/classes" element={<HomeCCPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
