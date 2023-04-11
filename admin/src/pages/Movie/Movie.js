import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Movie = () => {

	return (
		<div>
			<div className='headerTitle'>
				<h1>Movie</h1>
				<Link><button>Tạo</button></Link>
			</div>
			<div>
				<img />
			</div>
		</div>
	);
};

export default Movie;