import { SearchbarContainer, SearchbarStyled } from "./searchbarStyled";
import Searchicon from "../../assets/searchicon.svg";

export const SearchbarComponent = () => {
  return (
    <SearchbarContainer>
        <img src={Searchicon}></img>
        <SearchbarStyled type="text" placeholder="Explore..." />
    </SearchbarContainer>
  );
};
