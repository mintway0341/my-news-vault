import { Mobile, Pc, Tablet } from "../hooks/MediaQuery";
import HomePc from "../pages/Home/HomePc";
import SearchMobile from "../pages/Search/SearchMobile";
import SearchPc from "../pages/Search/SearchPc";

function Search() {
  return (
    <>
      <Pc>
        <SearchPc />
      </Pc>
      <Tablet>
        <SearchPc />
      </Tablet>
      <Mobile>
        <SearchMobile />
      </Mobile>
    </>
  );
}
export default Search;
