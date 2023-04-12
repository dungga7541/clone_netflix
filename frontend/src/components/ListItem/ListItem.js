import "./ListItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Player } from 'video-react';

export default function ListItem({ index, item }) {
	const [isHovered, setIsHovered] = useState(false);
	const [movie, setMovie] = useState({});

	useEffect(() => {
		const getMovie = async () => {
			try {
				const res = await axios.get("http://localhost:8000/api/movies/find/" + item, {
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
	console.log(movie.trailer)
	return (
		<Link to={{ pathname: "/watch", movie: movie }}>
			<div
				className="listItem"
				// style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<img src={movie?.imgSm} alt="" />
				{isHovered && (
					<>
						<div >
							<video key={movie.trailer}  autoPlay={true}>
								<source src={movie.trailer}  autoPlay={true}/>
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
					</>
				)}
			</div>
		</Link>
	);
}