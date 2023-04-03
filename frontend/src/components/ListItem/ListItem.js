import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import axios from 'axios';
import "./ListItem.scss";

const ListItem = ({index,item}) => {
	const [isHovered,setIsHovered] = useState(false);
	const [movie, setMovie] = useState({});
	useEffect(() => {
		const getMovie = async () => {
		  try {
			const res = await axios.get("/movies/find/" + item, {
			  headers: {
				token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmEwMDY3OTY0ZjhkNzBhMTMwNjUxZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDQ3NDIzNSwiZXhwIjoxNjgwOTA2MjM1fQ.LITtXBGF4ORLrB-xeuZ-OFAVV-C3hoyX1vQfE-ySb6Y"
			  },
			});
			setMovie(res.data);
		  } catch (err) {
			console.log(err);
		  }
		};
		getMovie();
	  }, [item]);
	  console.log(movie)
	return (
		<Link to={{ pathname: "/watch", movie: movie }}>
		<div
		  className="listItem"
		  style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
		  onMouseEnter={() => setIsHovered(true)}
		  onMouseLeave={() => setIsHovered(false)}
		>
		  <img src={movie?.imgSm} alt="" />
		  {isHovered && (
			<>
			  <video src={movie.trailer} autoPlay={true} loop />
			  <div className="itemInfo">
				<div className="icons">
				  <PlayArrowIcon className="icon" />
				  <AddIcon className="icon" />
				  <ThumbUpAltIcon className="icon" />
				  <ThumbDownAltIcon className="icon" />
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
	  </Link>
	);
};
			
export default ListItem;