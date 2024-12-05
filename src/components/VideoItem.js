import React from "react";
import "../style/video.css";

const VideoItem = ({ video, handleVideoSelect, isSelected }) => {
  return (
    <div
      onClick={() => handleVideoSelect(video)}
      className={`video-item item ${isSelected ? "selected" : ""}`}
      style={{
        ...(isSelected ? styles.selectedVideo : {}),
        marginBottom: "10px",
      }}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

const styles = {
  selectedVideo: {
    width: "100%",
    height: "auto",
  },
};

export default VideoItem;
