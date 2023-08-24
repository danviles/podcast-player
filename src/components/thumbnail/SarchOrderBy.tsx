import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";

const SarchOrderBy = () => {
  const [orderList, setOrderList] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setOrderList(event.target.value);
  };
  return (
    <div className="flex justify-between items-center">
      <SearchIcon className="text-white"/>
      <FormControl
        sx={{ display: "flex", m: 1, minWidth: 120 }}
      >
        <InputLabel id="orderByLabel">Order By</InputLabel>
        <Select
          variant="outlined"
          labelId="orderByLabel"
          value={orderList}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"released"}>Released</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SarchOrderBy;
