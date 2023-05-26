import "./ListItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { Player } from 'video-react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ListItem({ index, item }) {
	const [isHovered, setIsHovered] = useState(false);
	const [movie, setMovie] = useState({});
	const navigate = useNavigate();

	const axiosInstance = axios.create
	({
		baseURL:process.env.REACT_APP_API_URL,
	});

	useEffect(() => {
		const getMovie = async () => {
			try {
				const res = await axiosInstance.get("movies/find/" + item, {
					headers: {
						token:
							"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
					},
				});
				setMovie(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getMovie();
	}, [item]);
	const clicktowatch = () => {
		navigate('/watch', { state : { query : movie.trailer }})
	}
	return (
		<div
		className="container"
		onClick={() => clicktowatch()}
	>
		<div className="listImage">
			<img src={movie.imgSm} alt="" />
			<ul className="list-card-action">
				<li>
					<FavoriteIcon />
					<span>Favorite</span>
				</li>
				<li>
					<ThumbDownAltIcon />
					<span>Dislike</span>
				</li>
				<li>
					<VisibilityIcon />
					<span>Watch Later</span>
				</li>
			</ul>
		</div>
		<div className="infoContent">
			<div className="itemInfo">
				<div className="itemInfoTop">
					<h2>{movie.title}</h2>
					<span>{movie.duration}</span>
					<span className="limit">+{movie.limit}</span>
					<span>{movie.year}</span>
				</div>
				<div className="genre">{movie.genre}</div>
			</div>
		</div>
	</div>
	);
}