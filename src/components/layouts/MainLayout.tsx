import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material";

const MainLayout = () => {
  const theme = useTheme();

  const mainStyle = {
    backgroundImage:  theme.palette.background.default
  };

  return (
    <main
      className="h-screen"
      style={mainStyle} 
    >
      <Outlet />
    </main>
  );
};

export default MainLayout;
