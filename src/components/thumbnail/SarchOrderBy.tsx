import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { TableTypeEnum } from "../../interfaces/interfaces";
import { usePodcastContext } from "../../hooks/usePodcast";

interface SearchOrderByProps {
  tableType: TableTypeEnum;
}

interface optionTable {
  option: string;
  value: string;
}

const SarchOrderBy = ({ tableType }: SearchOrderByProps) => {
  const { ordernPodcastsByName, ordernPodcastsByReleased, ordernEpisodesByTitle, ordernEpisodesByReleased } =
    usePodcastContext();

  const [orderList, setOrderList] = useState("");
  const [options, setOptions] = useState<optionTable[]>([]);

  useEffect(() => {
    switch (tableType) {
      case TableTypeEnum.SearchTable:
        setOptions([
          { option: "Artist name", value: "name" },
          { option: "Recent", value: "recent" },
        ]);
        break;
      case TableTypeEnum.EpisodeTable:
        setOptions([
          { option: "Tittle", value: "tittle" },
          { option: "Recent", value: "recent" },
          // { option: "Duration", value: "duration" },
        ]);
        break;
      default:
        break;
    }
  }, [tableType]);

  useEffect(() => {
    switch (tableType) {
      case TableTypeEnum.SearchTable:
        if (orderList === "name") {
          ordernPodcastsByName();
        }
        if (orderList === "recent") {
          ordernPodcastsByReleased();
        }
        break;

      case TableTypeEnum.EpisodeTable:
        if (orderList === "tittle") {
          ordernEpisodesByTitle();
        }
        if (orderList === "recent") {
          ordernEpisodesByReleased();
        }
      break;

      default:
        break;
    }
  }, [orderList]);

  const handleChange = (event: SelectChangeEvent) => {
    setOrderList(event.target.value);
  };

  return (
    <div className="flex justify-between items-center -mr-3">
      <SearchIcon className="text-white" />
      <FormControl sx={{ display: "flex", my: 1, minWidth: 120 }}>
        <InputLabel id="orderByLabel">Order By</InputLabel>
        <Select
          variant="outlined"
          labelId="orderByLabel"
          value={orderList}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options?.map((item, index) => {
            return (
              <MenuItem key={index} value={item.value}>
                {item.option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SarchOrderBy;
