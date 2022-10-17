import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@mui/icons-material";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__search" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1580940095611625472"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="BreakingBadIrny"
          options={{ height: 400 }}
        />

        <div className="widgets__share">
          <TwitterShareButton
            url={""}
            options={{ text: "@LuckyFing3r is so cool!" }}
          />{" "}
          <span>← click me!</span>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
