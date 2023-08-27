import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material";
import SearchBar from "../search/SearchBar";
import { useEffect } from "react";
import BottomPlayBar from "../playbar/BottomPlayBar";


const MainLayout = () => {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.backgroundImage = theme.palette.background.default;
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [theme.palette.background.default]);

  return (
    <>
      <header className="py-[30px] mx-32">
        {/* Search bar */}
        <SearchBar />
      </header>
      <main className="flex flex-col justify-center mx-32">
        <Outlet />
      </main>
      <div className="z-10">
        <BottomPlayBar />
      </div>
    </>
  );
};

export default MainLayout;
