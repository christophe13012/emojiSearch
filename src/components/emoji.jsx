import React from "react";

const Emoji = ({ emoji }) => {
  return (
    <li className="list-group-item pl-5" style={{ textAlign: "left" }}>
      <img alt="emoji" src={"emojis/" + emoji + ".png"} />
      <span style={{ verticalAlign: "middle", marginLeft: 10 }}>
        {emoji.charAt(0).toUpperCase() + emoji.slice(1)}
      </span>
    </li>
  );
};

export default Emoji;
