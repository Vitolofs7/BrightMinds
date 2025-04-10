import { HomeStyled } from "./home.styled";
import { TitleComponent } from "../../components/title/title.component";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import { CardComponent } from "../../components/card/card.component";
import { CardContainerComponent } from "../../components/cardContainer/cardContainer.component";
import { Link } from "react-router-dom";
import { useSubjectsData } from "../../utils/hooks/useSubjectsData";
import { LoaderComponent } from "../../components/loader/loader.component";
import pythonLogo from "../../assets/pythonLogo.svg";
import { useUser } from "../../utils/userProvider/userProvider";

export const HomePage = ({ username }) => {

    const { user } = useUser(); // Get the user data from the context
    // console.log(user);
    

    username = 'user'

    const { subjectsList, loading } = useSubjectsData();

    const randomProgress = () => {
        return Math.floor(Math.random() * 100) + 1;

    }

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
                                <CardComponent icon={pythonLogo} type="courseSmall" courseName={subject.subjectName} courseLength='10 hours' />
                            </Link>
                        ))}
                        {subjectsList.data.map((subject) => (
                            <Link to={`/Courses/${subject.subjectName}`} key={subject.id}>
                                <CardComponent icon={pythonLogo} type="courseSmall" courseName={subject.subjectName} courseLength='10 hours' />
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
                                <CardComponent courseProgress={randomProgress()} icon={pythonLogo} type="courseLarge" courseName={subject.subjectName} courseLength='10 hours' />
                            </Link>
                        ))}
                        {subjectsList.data.map((subject) => (
                            <Link to={`/Courses/${subject.subjectName}`} key={subject.id}>
                                <CardComponent courseProgress={randomProgress()} icon={pythonLogo} type="courseLarge" courseName={subject.subjectName} courseLength='10 hours' />
                            </Link>
                        ))}
                        {subjectsList.data.map((subject) => (
                            <Link to="/Courses" key={subject.id}>
                                <CardComponent courseProgress={randomProgress()} icon={pythonLogo} type="courseLarge" courseName={subject.subjectName} courseLength='10 hours' />
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

