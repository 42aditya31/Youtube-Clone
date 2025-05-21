import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../constant";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    // console.log("Status Code:", response.status); // Helpful log
    const json = await response.json();
    setVideoData(json.items);

    // console.log(videoData);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videoData.map((video) => (
        <VideoCard info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
