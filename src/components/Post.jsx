import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import {
  ChatBubble,
  FavoriteBorder,
  Publish,
  RepeatRounded,
  Verified,
} from "@mui/icons-material";
import PostModal from "./PostModal";

const Post = forwardRef(
  (
    { displayName, username, verified, text, image, avatar, id, getTweets },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <Verified className="post__badge" />} @{username}
                </span>
              </h3>
              <PostModal id={id} getTweets={getTweets} />
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {image && <img src={image} alt="" />}
          <div className="post__footer">
            <ChatBubble fontSize="small" />
            <RepeatRounded />
            <FavoriteBorder />
            <Publish />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
