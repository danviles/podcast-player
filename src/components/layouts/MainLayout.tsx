import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material";
import SearchBar from "../search/SearchBar";

const MainLayout = () => {
  const theme = useTheme();

  const mainStyle = {
    backgroundImage: theme.palette.background.default,
  };

  return (
    <div className="h-screen" style={mainStyle}>
      <main className="flex flex-col justify-center mx-14">
        <header className="py-[30px] px-10">
          {/* Search bar */}
          <SearchBar />
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
