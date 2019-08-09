import React from "react";
import data from "../emojis.json";

const Test = () => {
  const firstEmoji = Math.floor(Math.random() * 884);
  const secondEmoji = Math.floor(Math.random() * 884);
  const emojis = Object.keys(data).map(key => [key, data[key]]);
  const firstEmojiSrc = "emojis/" + emojis[firstEmoji][0] + ".png";
  const secondEmojiSrc = "emojis/" + emojis[secondEmoji][0] + ".png";
  return (
    <div style={{ marginTop: 20, paddingBottom: 30 }}>
      <img
        alt="emoji"
        style={{
          verticalAlign: "middle"
        }}
        src={firstEmojiSrc}
      />
      <h1
        style={{
          paddingLeft: 15,
          paddingRight: 15,
          fontSize: 30,
          display: "inline"
        }}
        className="display-4"
      >
        Welcome on the Emoji Search
      </h1>
      <img
        alt="emoji"
        style={{
          verticalAlign: "middle"
        }}
        src={secondEmojiSrc}
      />
    </div>
  );
};

export default Test;
