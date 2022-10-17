import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import { db } from "../firebase/init";
import { addDoc, collection } from "firebase/firestore";

function TweetBox({ getTweets }) {
  const [tweetMessage, setTweetMessage] = useState("");
  
  function createTweet() {
    const post = {
      displayName: "John Doe",
      username: "anonymous",
      verified: true,
      text: tweetMessage,
      avatar:
      "https://cdn-icons-png.flaticon.com/512/634/634741.png",
    };
    addDoc(collection(db, "posts"), post);
  }

  useEffect(() => {
    getTweets();
  }, [])

  const postTweet = (e) => {
    e.preventDefault();

    createTweet();
    getTweets();

    setTweetMessage("");
  };
  
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn.personalitylist.com/avatars/10957.png" />
          <input
            onChange={(event) => setTweetMessage(event.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <Button onClick={postTweet} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
