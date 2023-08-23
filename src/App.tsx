import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/theme.js";
import MainLayout from "./components/layouts/MainLayout";
import PodcastSearchPage from "./components/pages/PodcastSearchPage";
import PodcastViewPage from "./components/pages/PodcastViewPage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route index element={<PodcastSearchPage />} />
          <Route path="podcast/:id" element={<PodcastViewPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
