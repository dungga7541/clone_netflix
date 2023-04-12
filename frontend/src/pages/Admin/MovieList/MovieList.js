import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import "./MovieList.scss";
import { MovieContext } from '../../../context/movieContext/movieContext';
import { getMovies, deleteMovies } from '../../../context/movieContext/apiCalls';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Player } from 'video-react';
import Sidebar from '../../../components/SideBar/SideBar';


const MovieList = () => {
	const { movies, dispatch } = useContext(MovieContext);
	useEffect(() => {
		getMovies(dispatch);
	}, [dispatch])
	const handleDelete = (id) => {
		deleteMovies(id, dispatch);
	}
	return (
		<div className='movieList'>
					<Sidebar/>

			<div>
				<table>
					<tbody>
						<tr>
							<th>title</th>
							<th>desc</th>
							<th>genre</th>
							<th>Img</th>
							<th>isSeries</th>
							<th>imgSm</th>
							<th>year</th>
							<th>Video</th>
							<th>Trailer</th>
							<th>Action</th>
						</tr>
						{movies.map((movie, i) => {
							return (
								<tr key={i}>
									<td>{movie.title}</td>
									<td>{movie.desc}</td>
									<td>{movie.genre}</td>
									<td className='img'>
										<img src={movie.img} alt={movie.img} width={50} height={50} />
									</td>
									<td>{movie.isSeries ? <CheckIcon style={{ color: 'green' }} /> : <CloseIcon style={{ color: 'red' }} />}</td>
									<td>
										<img src={movie.imgSm} alt={movie.imgSm} width={50} height={50} />
									</td>
									<td>{movie.year}</td>
									<td className='movieYT'>
										<p>
										<video key={movie.video} width={50} height={50}>
											<source src={movie.video} />
										</video>
										</p>
									</td>
									<td className='movieYT'>
										<p>
										<video key={movie.trailer} width={50} height={50}>
								<source src={movie.trailer} />
							</video>
										</p>
									</td>
									<td>
										<Link to={{ pathname: "/movie/" + movie._id, movie }}><button>edit</button></Link>
										<button onClick={() => handleDelete(movie._id)}>delete</button>
									</td>
								</tr>
							)
						}
						)}
					</tbody>
				</table>
				<p></p>
			</div>

		</div>
	);
};

export default MovieList;