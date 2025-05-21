import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={snippet?.thumbnails?.medium?.url} />
      <ul>
        <li className="font-bold py-2">{snippet?.localized?.title}</li>
        <li>{snippet?.channelTitle}</li>
       <div className="flex gap-x-6">
       <li>{statistics?.viewCount} <span className="font-bold ">views</span></li>
       <li className="bg-gray-100 rounded-md p-[4px] cursor-pointer"> 👍🏻 {statistics?.likeCount}  </li>
       </div>
      </ul>
    </div>
  );
};

export default VideoCard;
