import { CardComponent } from "../../components/card/card.component";
import { CardContainerComponent } from "../../components/cardContainer/cardContainer.component";
import pythonLogo from "../../assets/pythonLogo.svg";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import { TitleComponent } from "../../components/title/title.component";
import { ExploreStyled } from "./explore.styled";
import HTMLicon from "../../assets/HTMLicon.svg";
import CSSicon from "../../assets/CSSicon.svg";
import tailwindlogo from "../../assets/tailwindlogo.svg";
import ReactLogo from "../../assets/ReactLogo.svg";
import { SearchbarComponent } from "../../components/searchbar/searchbarComponent";


export const ExplorePage = ({ username }) => {
  username = localStorage.getItem("userName") || username;

  return (
    <>
      <ExploreStyled>
        <TitleComponent
          text="hello, "
          boldText={username}
          logo={null}
          size="small"
        />
        <SubTitleComponent
          text="Start learning!"
          boldness="light"
          size="small"
        />
        <div className="contentContainer">
          <SearchbarComponent />
        </div>
        <CardContainerComponent direction="vertical" className="cards">
          <CardComponent
            icon={HTMLicon}
            color="yellow"
            type="courseLarge"
            courseName="HTML for beginners"
            courseLength="10 hours"
            progressBar={false}
          />
          <CardComponent
            icon={CSSicon}
            color="yellow"
            type="courseLarge"
            courseName="CSS for beginners"
            courseLength="10 hours"
            progressBar={false}
          />
          <CardComponent
            icon={tailwindlogo}
            color="yellow"
            type="courseLarge"
            courseName="Tailwind"
            courseLength="10 hours"
            progressBar={false}
          />
          <CardComponent
            icon={ReactLogo}
            color="yellow"
            type="courseLarge"
            courseName="React"
            courseLength="10 hours"
            progressBar={false}
          />
          <CardComponent
            icon={pythonLogo}
            color="yellow"
            type="courseLarge"
            courseName="Python"
            courseLength="10 hours"
            progressBar={false}
          />
        </CardContainerComponent>
      </ExploreStyled>
    </>
  );
};
