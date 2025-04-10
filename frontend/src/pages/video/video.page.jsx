import { VideoStyled } from "./video.styled";
import { VideoAboutComponent } from "../../components/videoAbout/videoAbout.component";
import { VideoDiscussionsComponent } from "../../components/videoDiscussions/videoDiscussions.component";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import { useState } from "react";
import backArrowIcon from "../../assets/backArrowIcon.svg";
import { Link, useParams } from "react-router-dom";
import tempVideoPlayerPicture from "../../assets/tempVideoPlayerPicture.png"; // Placeholder for video player picture
import { BackArrowComponent } from "../../components/backarrow/backarrow.component";
import { useCommentsData } from "../../utils/hooks/useCommentsData";
import { useVideosData } from "../../utils/hooks/useVideosData";

export const VideoPage = () => {
  const [activeTab, setActiveTab] = useState("about"); // State to track the active tab
  const {videoId} = useParams()

  const { commentsList } = useCommentsData(videoId); // Fetch comments data
  const { video } = useVideosData(videoId); // Fetch videos data

  const formatYouTubeUrl = (url) => {
    if (!url.includes("youtube.com")) return url; // Return the URL as is if it's not a YouTube link
    const videoId = new URL(url).searchParams.get("v"); // Extract the video ID from the URL
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <VideoStyled>
      <BackArrowComponent />
      {video?.videoUrl ? (
        <iframe
          className="video-frame"
          src={formatYouTubeUrl(video.videoUrl)}
          title={video.videoName}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading video...</p>
      )}
      <div className="descriptionContainer">
        <div className="descriptionSelector">
          {/* Tabs to switch between components */}
          <SubTitleComponent
            text="About"
            boldness="light"
            size="small"
            icon={null}
            underline={activeTab === "about" ? "yes" : "no"}
            onClick={() => setActiveTab("about")} // Set activeTab to "about"
          />
          <SubTitleComponent
            text="Discussions"
            boldness="light"
            size="small"
            icon={null}
            underline={activeTab === "discussions" ? "yes" : "no"}
            onClick={() => setActiveTab("discussions")} // Set activeTab to "discussions"
          />
        </div>

        {/* Conditionally render components based on activeTab */}
        {activeTab === "about" ? (
          <VideoAboutComponent
            descriptionTitle={video?.videoName}
            description={video?.summary}
          />
        ) : (
          <VideoDiscussionsComponent />
        )}
      </div>
    </VideoStyled>
  );
};