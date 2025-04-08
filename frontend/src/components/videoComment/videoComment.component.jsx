import { VideoCommentStyled } from "./videoComment.styled";

export const VideoCommentComponent = ({ profileIcon, commentText, likes, dislikes, commentsRecieved, preview }) => {

    return (
        <VideoCommentStyled>
            {preview ? (
                <>
                    <img src={profileIcon} alt="Profile icon" />
                    <div>
                        <input type="text" placeholder="Ask a question" />
                    </div>
                </>
            ) : (
                <>
                    <img src={profileIcon} alt="Profile icon" />
                    <div>
                        <p>{commentText}</p>
                        <div className="comment-stats">
                            <span>{likes} L</span>
                            <span>{dislikes} DL</span>
                            <span>{commentsRecieved} C</span>
                        </div>
                    </div>
                </>
            )}
        </VideoCommentStyled>
    );
};