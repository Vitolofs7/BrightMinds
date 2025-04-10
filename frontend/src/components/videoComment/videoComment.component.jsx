import { VideoCommentStyled } from "./videoComment.styled";

export const VideoCommentComponent = ({ profileIcon, commentText, commentLikes, commentDislikes, commentsRecieved, preview, commentDate }) => {

    
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
                            <span>{commentLikes} L</span>
                            <span>{commentDislikes} DL</span>
                            {/* <span>{commentDate} C</span> */}
                        </div>
                    </div>
                </>
            )}
        </VideoCommentStyled>
    );
};