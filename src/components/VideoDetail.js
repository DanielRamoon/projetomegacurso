import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1>Enter search keyword to load...</h1>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div style={{ marginTop: "20px" }}>
      <div className="ui embed">
        <iframe
          src={videoSrc}
          allowFullScreen
          title="Video player"
          style={{ width: "100%", height: "400px" }}
        />
      </div>
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
