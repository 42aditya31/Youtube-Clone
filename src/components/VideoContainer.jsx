import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../constant";

const VideoContainer = () => {


  const getVideos= async() =>{
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
    console.log(json)
  }
  useEffect(() => {
    getVideos();
  });
  return (
    <div>
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
