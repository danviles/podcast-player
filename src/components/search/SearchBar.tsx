import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useGetPodcasts } from "../../hooks/usePodcast";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const getPodcasts = useGetPodcasts(query, 0);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      getPodcasts.refetch();
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex justify-center items-center h-10 w-10 rounded-[15px] bg-[#1A1A1A]">
        <ArrowBackIosNewIcon className="text-white"/>
      </div>
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
