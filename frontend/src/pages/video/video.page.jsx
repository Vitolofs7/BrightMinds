import { VideoStyled } from "./video.styled";
import { VideoAboutComponent } from "../../components/videoAbout/videoAbout.component";
import { VideoDiscussionsComponent } from "../../components/videoDiscussions/videoDiscussions.component";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import { useState } from "react";
import backArrowIcon from "../../assets/backArrowIcon.svg";
import { Link } from "react-router-dom";
import tempVideoPlayerPicture from "../../assets/tempVideoPlayerPicture.png"; // Placeholder for video player picture

export const VideoPage = () => {
  const [activeTab, setActiveTab] = useState("about"); // State to track the active tab

  return (
    <VideoStyled>
      <Link to="/courseHomepage"> <img className="backArrow" src={backArrowIcon} alt="" /></Link>
      <img src={tempVideoPlayerPicture} alt="" />
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
            descriptionTitle="Introduction"
            description="In this tutorial, you'll learn the fundamentals of React, a powerful JavaScript library for building dynamic web applications."
          />
        ) : (
          <VideoDiscussionsComponent />
        )}
      </div>
    </VideoStyled>
  );
};