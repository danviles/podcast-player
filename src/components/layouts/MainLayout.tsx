import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material";
import SearchBar from "../search/SearchBar";
import { useEffect } from "react";

const MainLayout = () => {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.backgroundImage = theme.palette.background.default;
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [theme.palette.background.default]);

  return (
    <main className="flex flex-col justify-center mx-20">
      <header className="py-[30px]">
        {/* Search bar */}
        <SearchBar />
      </header>
      <Outlet />
    </main>
  );
};

export default MainLayout;
