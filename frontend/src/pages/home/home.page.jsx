import { HomeStyled } from "./home.styled";
import { TitleComponent } from "../../components/title/title.component";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import { CardComponent } from "../../components/card/card.component";
import { CardContainerComponent } from "../../components/cardContainer/cardContainer.component";
import { Link } from "react-router-dom";
import { useSubjectsData } from "../../utils/hooks/useSubjectsData";
import { LoaderComponent } from "../../components/loader/loader.component";
import pythonLogo from "../../assets/pythonLogo.svg";
import html5Logo from "../../assets/html5Logo.svg";
import javascriptLogo from "../../assets/javascriptLogo.svg";
import reactLogo2 from "../../assets/reactLogo2.svg";
import cssLogo from "../../assets/cssLogo.svg";
import { useUser } from "../../utils/userProvider/userProvider";

export const HomePage = ({ username }) => {




    username = localStorage.getItem("userName") || username;

    const { subjectsList, loading } = useSubjectsData();

    const randomProgress = () => {
        return Math.floor(Math.random() * 100) + 1;

    };

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

    if (loading) {
        return (
            <LoaderComponent />
        );
    } else {


        return (
            <HomeStyled>
                <TitleComponent text="hello, " boldText={username} logo={null} size="small" />
                <SubTitleComponent text="Ready to try something new?" boldness="light" size="small" />
                {subjectsList && subjectsList.data?.length > 0 ? (
                    <CardContainerComponent direction="sideways" className="cards">
                        {subjectsList.data.map((subject) => (
                                <Link to={`/Courses/${subject.subjectName}`} key={subject.id}>
                                    <CardComponent icon={getIconBySubject(subject.subjectName)} type="courseSmall" courseName={subject.subjectName} courseLength='10 hours' />
                                </Link>
                        ))}
                        {subjectsList.data.map((subject) => (
                            <Link to={`/Courses/${subject.subjectName}`} key={subject.id}>
                                <CardComponent icon={getIconBySubject(subject.subjectName)} type="courseSmall" courseName={subject.subjectName} courseLength='10 hours' />
                            </Link>
                        ))}

                    </CardContainerComponent>
                ) : (
                    <p>No subjects available</p>
                )}
                <SubTitleComponent text='Continue learning' boldness="light" size="small" />
                {subjectsList && subjectsList.data?.length > 0 ? (
                    <CardContainerComponent direction="vertical" className="cards">
                        {subjectsList.data.map((subject) => (
                                <Link to={`/Courses/${subject.subjectName}`} key={subject.id}>
                                    <CardComponent progressBar={true} courseProgress={randomProgress()} icon={getIconBySubject(subject.subjectName)} type="courseLarge" courseName={subject.subjectName} courseLength='10 hours' />
                                </Link>
                        ))}
                        {subjectsList.data.map((subject) => (
                            <Link to={`/Courses/${subject.subjectName}`} key={subject.id}>
                                <CardComponent progressBar={true} courseProgress={randomProgress()} icon={getIconBySubject(subject.subjectName)} type="courseLarge" courseName={subject.subjectName} courseLength='10 hours' />
                            </Link>
                        ))}

                    </CardContainerComponent>
                ) : (
                    <p>No subjects available</p>
                )}

            </HomeStyled>
        );
    }
}

