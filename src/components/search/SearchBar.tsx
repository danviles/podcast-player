import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useGetPodcasts, usePodcastContext } from "../../hooks/usePodcast";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {

  const [query, setQuery] = useState("");
  const { setSearchQuery } = usePodcastContext();

  // const getPodcasts = useGetPodcasts(query, 0);
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButtom = location.pathname === "/podcast/";

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchQuery(query);
    }
  };

  const handleBackButtom = () => {

    navigate(-1);
  }

  return (
    <div className="flex items-center gap-3">
      {showBackButtom && (
        <div className="flex justify-center items-center h-10 w-10 rounded-[15px] bg-[#1A1A1A] cursor-pointer">
          <ArrowBackIosNewIcon className="text-white" onClick={handleBackButtom} fontSize="large" />
        </div>
      )}
      <TextField
        variant="outlined"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        value={query}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
