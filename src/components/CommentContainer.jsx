import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentData = [
  {
    name: "Aditya Sharma",
    comment: "This article really helped me understand the concept!",
    reply: [
      {
        name: "Parva Shukla",
        comment: "Same here! The examples were super clear.",
        reply: [
          {
            name: "Harsh Patel",
            comment: "Agreed! Loved the step-by-step breakdown.",
            reply: [
              {
                name: "Sneha Verma",
                comment: "Glad I found this thread. Very helpful!",
                reply: [
                  {
                    name: "Raj Mehta",
                    comment: "Big thanks to the author!",
                    reply: [
                      {
                        name: "Aditya Sharma",
                        comment: "Appreciate all your kind words 🙌",
                        reply: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Kriti Jain",
            comment: "Loved the visuals too!",
            reply: [],
          },
        ],
      },
      {
        name: "Neha Singh",
        comment: "Can someone explain the last point again?",
        reply: [],
      },
    ],
  },
  {
    name: "Rohan Das",
    comment: "Great content. Bookmarked for later!",
    reply: [],
  },
  {
    name: "Meera Joshi",
    comment: "Simple and easy to understand. Thanks!",
    reply: [],
  },
  {
    name: "Ankit Roy",
    comment: "Perfect for beginners like me.",
    reply: [],
  },
  {
    name: "Tanya Kapoor",
    comment: "This cleared all my doubts. ❤️",
    reply: [],
  },
];




const CommentContainer = () => {
  return (
    <div className="m-5  p-5">
      <h1 className=" font-medium text-xl text-black ">Comments :</h1>
      {/* <Comment data={commentData[0]} /> */}
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
