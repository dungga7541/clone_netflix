import React, { useEffect ,useState} from 'react';
import "./Featured.scss";
import axios from 'axios';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./Featured.scss";
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';

const Featured = ({ type,setGenre }) => {
	const [content, setContent] = useState({});
	const axiosInstance = axios.create
	({
		baseURL:process.env.REACT_APP_API_URL,
	});
	useEffect(() => {
		const getRandomContent = async () => {
			try {
				const res = await axiosInstance.get(`movies/random?type=${type}`,{
					headers: {
						token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
					},
				});
				setContent(res.data[0]);
			}catch(err) {
				console.log(err);
			}
		}
		getRandomContent();
	}, [type]);
	return (
		<div className='featured'>
			{
				type && (
					<div className="category">
						<span>{type === "movies" ? "Movies" : "Series"}</span>
						<select
							name="genre"
							id="genre"
							onChange={(e) =>setGenre(e.target.value)}
						>
							<option>Genre</option>
							<option value="adventure">Adventure</option>
							<option value="comedy">Comedy</option>
							<option value="crime">Crime</option>
							<option value="fantasy">Fantasy</option>
							<option value="historical">Historical</option>
							<option value="horror">Horror</option>
							<option value="romance">Romance</option>
							<option value="sci-fi">Sci-fi</option>
							<option value="thriller">Thriller</option>
							<option value="western">Western</option>
							<option value="animation">Animation</option>
							<option value="drama">Drama</option>
							<option value="documentary">Documentary</option>
						</select>
					</div>
				)
			}

			<div className='showSlider'>
				<Slider />
			</div>
		</div>
	);
};

export default Featured;