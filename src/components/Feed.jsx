import React, { useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/init.js";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  const getTweets = async () => {
    const { docs } = await getDocs(collection(db, "posts"));
    setPosts(docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox getTweets={getTweets} />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            id={post.id}
            getTweets={getTweets}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
