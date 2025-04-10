import { VideoDiscussionsStyled } from "./videoDiscussions.styled";
import { VideoCommentComponent } from "../videoComment/videoComment.component";
import tempProfileIcon from "../../assets/tempProfileIcon.svg";
import { useCommentsData } from "../../utils/hooks/useCommentsData";
import { useParams } from "react-router-dom";
import { SubTitleComponent } from "../subtitle/subTitle.component";

export const VideoDiscussionsComponent = () => {
    const videoId = useParams().videoId;
    const { commentsList, loading } = useCommentsData(videoId);


    return (
        <VideoDiscussionsStyled>
            <div className="commentsContainer">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {/* Preview comment input */}
                        <VideoCommentComponent
                            preview={true}
                            profileIcon={tempProfileIcon}
                            commentText="Ask a question"
                            commentLikes={0}
                            commentDislikes={0}
                            commentsRecieved={0}
                            commentDate={null}
                        />
                        <SubTitleComponent text="Most popular" />

                        {/* Render comments if available */}
                        {commentsList && commentsList.length > 0 ? (
                            commentsList.map((comment) => (
                                <VideoCommentComponent
                                    key={comment.id}
                                    profileIcon={tempProfileIcon}
                                    commentText={comment.content}
                                    commentDate={comment.createdAt}
                                    commentLikes={comment.like}
                                    commentDislikes={comment.dislike}
                                />
                            ))
                        ) : (
                            <p>No comments available</p>
                        )}
                    </>
                )}
            </div>
        </VideoDiscussionsStyled>
    );
};