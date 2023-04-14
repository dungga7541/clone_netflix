import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import YouTube, { YouTubeProps } from 'react-youtube';
import "./Watch.scss";

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'autohide': 1,
      'wmode': 'opaque',
      'origin': 'http://localhost:8100'
    },
  };

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <div className="video">
        <YouTube videoId="yQEondeGvKo" opts={opts} style={{ height: '99.61%', width: "100%" }} />
      </div>
    </div>
  );

}

export default Watch;