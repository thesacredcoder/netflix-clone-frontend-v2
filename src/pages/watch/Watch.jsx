import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
import ArrowBackOutlined from "@mui/icons-material/ArrowBackOutlined";

function Watch(props) {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        src={movie.trailer}
        autoPlay
        progress
        controls
        className="video"
      ></video>
    </div>
  );
}

export default Watch;
