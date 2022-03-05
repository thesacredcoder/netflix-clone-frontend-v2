import PlayArrow from "@mui/icons-material/PlayArrow";
import Add from "@mui/icons-material/Add";
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOutlined from "@mui/icons-material/ThumbDownOutlined";

import "./listItem.scss";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "";
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    >
      <img src="" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 minutes</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              dolorum odio cumque nulla sapiente quisquam
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
