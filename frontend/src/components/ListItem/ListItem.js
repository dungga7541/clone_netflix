import "./ListItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { Player } from 'video-react';

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
				className="listItem"
				// style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={()=>clicktowatch()}
			>
				<img src={movie?.imgSm} alt="" />
				{isHovered && (
					<div className="infoContent">
						<div >
							<video key={movie.trailer}  autoPlay={true} >
								<source src={movie.trailer}  autoPlay={true} height={325} width={280}/>
							</video>
							{/* <Player>
								<video src={movie.trailer} autoPlay={true} loop width="220" />
							</Player> */}
						</div>
						<div className="itemInfo">
							<div className="itemInfoTop">
								<h2>{movie.title}</h2>
								<span>{movie.duration}</span>
								<span className="limit">+{movie.limit}</span>
								<span>{movie.year}</span>
							</div>
							<div className="desc">{movie.desc}</div>
							<div className="genre">{movie.genre}</div>
						</div>
					</div>
				)}
			</div>
	);
}