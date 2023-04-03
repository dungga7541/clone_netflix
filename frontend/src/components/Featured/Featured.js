import React from 'react';
import "./Featured.scss";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Featured = ({ type }) => {
	return (
		<div className='featured'>
			{
				type && (
					<div className="category">
						<span>{type === "movies" ? "Movies" : "Series"}</span>
						<select
							name="genre"
							id="genre"
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
			<img  alt="" />
			<div className="info">
				<img alt="" />
				<span className="desc"></span>
				<div className="buttons">
					<button className="play">
						<PlayArrowIcon />
						<span>Play</span>
					</button>
					<button className="more">
						<InfoOutlinedIcon />
						<span>Info</span>
					</button>
				</div>
			</div>

		</div>
	);
};

export default Featured;