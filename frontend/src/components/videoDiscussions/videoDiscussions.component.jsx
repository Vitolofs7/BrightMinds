import { VideoDiscussionsStyled } from "./videoDiscussions.styled";
import { VideoCommentComponent } from "../videoComment/videoComment.component";
import { SubTitleComponent } from "../subtitle/subTitle.component";
import tempProfileIcon from "../../assets/tempProfileIcon.svg";



export const VideoDiscussionsComponent = () => {


    return (
        <VideoDiscussionsStyled>
            <VideoCommentComponent profileIcon={tempProfileIcon} preview={true}  />
            <SubTitleComponent text="Discussions" boldness="light" size="small" />
            <VideoCommentComponent profileIcon={tempProfileIcon} commentText="This is a commentThis is a commentThis is a commentThis is a commentThis is a commentThis is a comment" likes="10" dislikes="2" commentsRecieved="5" preview={false} />
            <VideoCommentComponent profileIcon={tempProfileIcon} commentText="This is a comment" likes="10" dislikes="2" commentsRecieved="5" preview={false} />
            <VideoCommentComponent profileIcon={tempProfileIcon} commentText="This is a comment" likes="10" dislikes="2" commentsRecieved="5" preview={false} />
            <VideoCommentComponent profileIcon={tempProfileIcon} commentText="This is a comment" likes="10" dislikes="2" commentsRecieved="5" preview={false} />
        </VideoDiscussionsStyled>
    )
}
