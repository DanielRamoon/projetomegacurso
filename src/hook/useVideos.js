import { useState } from "react";
import youtube from "../apis/youtube";

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  const searchVideos = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return { videos, searchVideos };
};

export default useVideos;
