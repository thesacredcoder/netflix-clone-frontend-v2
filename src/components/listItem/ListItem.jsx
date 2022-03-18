import PlayArrow from "@mui/icons-material/PlayArrow";
import Add from "@mui/icons-material/Add";
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOutlined from "@mui/icons-material/ThumbDownOutlined";

import "./listItem.scss";
import { useEffect, useState } from "react";
import API from "../../api";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data } = await API.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzQ4NDFlYThhOWJiYzJmYzRkZjEyZCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjQ3NjA4OTU2LCJleHAiOjE2NDgwNDA5NTZ9.1CcX93i6Q2EBCFpXdBrOY-RdYwdOJJGb2uIGhCJNGJs",
          },
        });

        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [item]);

  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    >
      <img src={movie.img} alt="" />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <Link to={{ pathname: "/watch", movie: movie }}>
                <PlayArrow className="icon" />
              </Link>
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}
