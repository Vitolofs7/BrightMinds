import { VideoAboutStyled } from "./videoAbout.styled";
import { SubTitleComponent } from "../subtitle/subTitle.component";


export const VideoAboutComponent = ({ description, descriptionTitle }) => {
    return (
        <VideoAboutStyled className="video-about">
            <SubTitleComponent text={descriptionTitle} boldness="light" size="small" icon={null} />
            <p>{description}</p>
        </VideoAboutStyled>
    );
}