import PlayThumbnail from "../thumbnail/PlayThumbnail";
import SearchTable from "../tables/SearchTable";
import { TableTypeEnum } from "../../interfaces/interfaces";

const PodcastSearchPage = () => {
  return (
    <section className="flex flex-col">
      <PlayThumbnail OrderByType={TableTypeEnum.SearchTable} />
      <SearchTable />
    </section>
  );
};

export default PodcastSearchPage;
