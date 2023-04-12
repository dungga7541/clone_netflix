import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import YouTube, { YouTubeProps } from 'react-youtube';
import "./Watch.scss";

const Watch = () => {

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
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