import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss";

const Watch = () => {
  const { state } = useLocation();
  const { query } = state;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <div >
        <video key={query} autoPlay={true} controls  className="video">
          <source src={query} autoPlay={true} />
        </video>
      </div>
    </div>
  );

}

export default Watch;