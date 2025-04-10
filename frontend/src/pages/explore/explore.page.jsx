import { CardComponent } from "../../components/card/card.component";
import { CardContainerComponent } from "../../components/cardContainer/cardContainer.component";
import pythonLogo from "../../assets/pythonLogo.svg";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import { TitleComponent } from "../../components/title/title.component";
import { ExploreStyled } from "./explore.styled";
import { SearchbarComponent } from "../../components/searchbar/searchbarComponent";
import { useSubjectsData } from "../../utils/hooks/useSubjectsData";
import { Link } from "react-router-dom";
import html5Logo from "../../assets/html5Logo.svg";
import javascriptLogo from "../../assets/javascriptLogo.svg";
import reactLogo2 from "../../assets/reactLogo2.svg";
import cssLogo from "../../assets/cssLogo.svg";



export const ExplorePage = ({ username }) => {
  username = localStorage.getItem("userName") || username;

  const { subjectsList, loading } = useSubjectsData();

  const getIconBySubject = (subjectName) => {
    switch (subjectName.toLowerCase()) {
      case 'html':
        return html5Logo;
      case 'javascript':
        return javascriptLogo;
      case 'python':
        return pythonLogo;
      case 'react':
        return reactLogo2;
      case 'css':
        return cssLogo;
      default:
        return pythonLogo; // Default icon if no match is found
    }
  };

  console.log(subjectsList.data);
  

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
          {subjectsList &&
            subjectsList.data?.length > 0 &&
            subjectsList.data.map((subject) => (
              <Link
                to={`/Courses/${subject.subjectName}`}
                key={subject.subjectName}
              >
                <CardComponent
                  title={subject.subjectName}
                  icon={getIconBySubject(subject.subjectName)}
                  type="courseLarge"
                  courseName={subject.subjectName}
                  courseLength="10 hours"
                  progressBar={false}
                />
              </Link>
            ))}

        </CardContainerComponent>
      </ExploreStyled>
    </>
  );
};
