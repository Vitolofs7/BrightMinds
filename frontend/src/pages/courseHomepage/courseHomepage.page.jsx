import { CourseHomepageStyled } from "./courseHomepage.styled";
import { TitleComponent } from "../../components/title/title.component";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import { CardContainerComponent } from "../../components/cardContainer/cardContainer.component";
import { CardComponent } from "../../components/card/card.component";
import { Link, useParams } from "react-router-dom";
import { BackArrowComponent } from "../../components/backarrow/backarrow.component";
import reactLogo from "../../assets/reactLogo.svg";
import videoIcon from "../../assets/videoIcon.svg";
import bookIcon from "../../assets/bookIcon.svg";
import checkmarkFilledIcon from "../../assets/checkmarkFilledIcon.svg";
import checkmarkEmptyIcon from "../../assets/checkmarkEmptyIcon.svg";
import controllerIcon from "../../assets/controllerIcon.svg";
import { useVideosData } from "../../utils/hooks/useVideosData";
import { useSubjectsData } from "../../utils/hooks/useSubjectsData";
import { LoaderComponent } from "../../components/loader/loader.component";
import html5Logo from "../../assets/html5Logo.svg";
import javascriptLogo from "../../assets/javascriptLogo.svg";
import pythonLogo from "../../assets/pythonLogo.svg";
import cssLogo from "../../assets/cssLogo.svg";
import reactLogo2 from "../../assets/reactLogo2.svg";


export const CourseHomepagePage = () => {


    const { courseSlug } = useParams();
    const { subject, loading } = useSubjectsData(courseSlug);
    const randomProgress = () => {
        return Math.floor(Math.random() * 100) + 1;

    }

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
    

    

    const { videosList } = useVideosData();

    const filteredVideos = videosList?.filter(video => video.subjectId === subject?.id);

    if (loading) {
        return (
            <LoaderComponent />
        );
    } else {



        return (
            <CourseHomepageStyled className="course-homepage-page">
                <BackArrowComponent />
                <TitleComponent text="Learn," boldText={subject?.subjectName} logo={getIconBySubject(subject.subjectName)} size="large" />
                <div>
                    <SubTitleComponent text="Videos" boldness="bold" size="small" icon={videoIcon} />
                    <CardContainerComponent direction="sideways">

                        {filteredVideos && filteredVideos?.length > 0 ? (
                            filteredVideos.map((video) => (
                                <Link to={`/Courses/${courseSlug}/${video.id}`} key={video.id}>
                                    <CardComponent courseProgress={randomProgress()} type="courseVideo" courseLength="10" courseName={video.videoName} icon={videoIcon} />
                                </Link>
                            ))
                        ) : (
                            <p>No videos available</p>
                        )}

                    </CardContainerComponent>

                </div>

                <div>
                    <SubTitleComponent text="Reading and listening" boldness="bold" size="small" icon={bookIcon} />
                    <CardContainerComponent direction="sideways">

                        <CardComponent text="Introduction" type="courseReading" courseLength="5" courseName="Introduction" icon={checkmarkFilledIcon} />
                        <CardComponent text="Introduction" type="courseReading" courseLength="5" courseName="Introduction" icon={checkmarkEmptyIcon} />
                        <CardComponent text="Introduction" type="courseReading" courseLength="5" courseName="Introduction" icon={checkmarkEmptyIcon} />
                        <CardComponent text="Introduction" type="courseReading" courseLength="5" courseName="Introduction" icon={checkmarkFilledIcon} />
                    </CardContainerComponent>
                </div>

                <div>
                    <SubTitleComponent text="Exercises" boldness="bold" size="small" icon={controllerIcon} />
                    <CardContainerComponent direction="sideways">
                        <CardComponent text="Introduction" type="courseExercise" courseName="Games" />
                        <CardComponent text="Introduction" type="courseExercise" courseName="Games" />
                        <CardComponent text="Introduction" type="courseExercise" courseName="Games" />
                        <CardComponent text="Introduction" type="courseExercise" courseName="Games" />

                    </CardContainerComponent>
                </div>


            </CourseHomepageStyled>
        );
    }
}