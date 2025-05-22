import React from 'react';

const Comment = ({ data }) => {
  const { name, comment } = data;

  return (
    <div className="flex items-start gap-3 mt-4">
      <img
        className="w-10 h-10 rounded-full"
        src="https://avatars.githubusercontent.com/u/186927267?s=48&v=4"
        alt="user"
      />
      <div className="bg-gray-100 px-4 py-2 rounded-2xl max-w-2xl">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-sm mt-1">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
