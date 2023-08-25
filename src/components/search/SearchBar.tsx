import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SearchBar = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex  justify-center items-center h-10 w-10 rounded-[15px] bg-[#1A1A1A]">
        <ArrowBackIosNewIcon className="text-white"/>
      </div>
      <TextField
        variant="outlined"
        placeholder="Search..."
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
