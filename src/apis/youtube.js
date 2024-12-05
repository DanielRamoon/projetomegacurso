// src/apis/youtube.js
import axios from "axios";

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

export const fetchVideos = async (searchTerm) => {
  try {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching videos", error);
    throw error;
  }
};

export default youtube;
