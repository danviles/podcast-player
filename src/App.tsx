import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./assets/theme.js";
import MainLayout from "./components/layouts/MainLayout";
import PodcastSearchPage from "./components/pages/PodcastSearchPage";
import PodcastViewPage from "./components/pages/PodcastViewPage";
import { PodcastProvider } from "./context/PodcastProvider.js";

function App() {
  const [themeMode, setThemeMode] = useState(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>
        <PodcastProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<PodcastSearchPage />} />
              <Route path="podcast" element={<PodcastViewPage />} />
            </Route>
          </Routes>
        </PodcastProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
