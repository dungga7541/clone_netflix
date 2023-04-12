import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../../components/SideBar/SideBar';

const Movie = () => {

	return (
		<div>
					<Sidebar/>

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