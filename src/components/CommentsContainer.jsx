import React from "react";
import Comment from "./Comment";
const commentData = [
  {
    name: "Dheeraj",
    text: "very nic data ",
    replies: [
      {
        name: "Dheeraj",
        text: "very nic data ",
        replies: [],
      },
      {
        name: "Dheeraj",
        text: "very nic data ",
        replies: [
          {
            name: "Dheeraj",
            text: "very nic data ",
            replies: [
              {
                name: "Dheeraj",
                text: "very nic data ",
                replies: [{ name: "Dheeraj", text: "very nic data " }],
              },
              {
                name: "Dheeraj",
                text: "very nic data ",
                replies: [{ name: "Dheeraj", text: "very nic data " }],
              },
              {
                name: "Dheeraj",
                text: "very nic data ",
                replies: [{ name: "Dheeraj", text: "very nic data " }],
              },
              {
                name: "Dheeraj",
                text: "very nic data ",
                replies: [{ name: "Dheeraj", text: "very nic data " }],
              },
              {
                name: "Dheeraj",
                text: "very nic data ",
                replies: [{ name: "Dheeraj", text: "very nic data " }],
              },
            ],
          },
        ],
      },
      {
        name: "Dheeraj",
        text: "very nic data ",
        replies: [
          {
            name: "Dheeraj",
            text: "very nic data ",
            replies: [
              {
                name: "Dheeraj",
                text: "very nic data ",
                replies: [{}],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Dheeraj",
    text: "very nic data ",
    replies: [
      {
        name: "Dheeraj",
        text: "very nic data ",
        replies: [{ name: "Dheeraj", text: "very nic data ", replies: [{}] }],
      },
    ],
  },
  {
    name: "Dheeraj",
    text: "very nic data ",
    replies: [
      {
        name: "Dheeraj",
        text: "very nic data ",
        replies: [{ name: "Dheeraj", text: "very nic data ", replies: [{}] }],
      },
    ],
  },
  {
    name: "Dheeraj",
    text: "very nic data ",
    replies: [
      {
        name: "Dheeraj",
        text: "very nic data ",
        replies: [{ name: "Dheeraj", text: "very nic data ", replies: [{}] }],
      },
    ],
  },
];
const CommentList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-5 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="py-2 sm:p-2">
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
