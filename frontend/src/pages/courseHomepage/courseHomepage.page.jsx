import { CourseHomepageStyled } from "./courseHomepage.styled";
import { TitleComponent } from "../../components/title/title.component";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import { CardContainerComponent } from "../../components/cardContainer/cardContainer.component";
import { CardComponent } from "../../components/card/card.component";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/reactLogo.svg";
import videoIcon from "../../assets/videoIcon.svg";
import bookIcon from "../../assets/bookIcon.svg";
import checkmarkFilledIcon from "../../assets/checkmarkFilledIcon.svg";
import checkmarkEmptyIcon from "../../assets/checkmarkEmptyIcon.svg";
import controllerIcon from "../../assets/controllerIcon.svg";
import backArrowIcon from "../../assets/backArrowIcon.svg";


export const CourseHomepagePage = () => {
    return (
        <CourseHomepageStyled className="course-homepage-page">
            <Link to="/homepage"> <img src={backArrowIcon} alt="" /></Link>
            <TitleComponent text="Learn," boldText="React" logo={reactLogo} size="large" />
            <div>
                <SubTitleComponent text="Videos" boldness="bold" size="small" icon={videoIcon} />
                <CardContainerComponent direction="sideways">
                    <CardComponent text="Introduction" icon={videoIcon} type="courseVideo" courseLength="5" courseName="Introduction" />

                   <Link to="/video"> <CardComponent text="Introduction" icon={videoIcon} type="courseVideo" courseLength="5" courseName="Introduction" /> </Link>
                    <CardComponent text="Introduction" icon={videoIcon} type="courseVideo" courseLength="5" courseName="Introduction" />
                    <CardComponent text="Introduction" icon={videoIcon} type="courseVideo" courseLength="5" courseName="Introduction" />
                    <CardComponent text="Introduction" icon={videoIcon} type="courseVideo" courseLength="5" courseName="Introduction" />
                </CardContainerComponent>
            </div>

            <div>
                <SubTitleComponent text="Reading and listening" boldness="bold" size="small" icon={bookIcon} />
                <CardContainerComponent direction="sideways">

                    <CardComponent text="Introduction" type="courseReading" courseLength="5" courseName="Introduction" icon={checkmarkFilledIcon}/>
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