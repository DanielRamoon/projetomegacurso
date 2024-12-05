import React, { useState } from "react";
import SearchBar from "../components/Searchbar/Searchbar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import useVideos from "../hook/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videos, searchVideos } = useVideos();

  const handleSearchSubmit = (term) => {
    searchVideos(term);
  };

  return (
    <div className="ui container" style={{ marginTop: "1em" }}>
      <SearchBar handleFormSubmit={handleSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column" style={{ marginTop: "20px" }}>
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
