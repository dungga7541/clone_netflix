import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import "./MovieList.scss";
import { MovieContext } from '../../../context/movieContext/movieContext';
import { getMovies, deleteMovies } from '../../../context/movieContext/apiCalls';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

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
			<div className='table-movieList-container'>
				<table>
					<caption>List Movie</caption>
					<tbody>
						<tr>
							<th>Title</th>
							<th>Desc</th>
							<th>Genre</th>
							<th>Img</th>
							<th>isSeries</th>
							<th>ImgSm</th>
							<th>Year</th>
							{/* <th>Video</th>
							<th>Trailer</th> */}
							<th>Action</th>
						</tr>
						{movies.map((movie, i) => {
							return (
								<tr key={i}>
									<td data-cell="Title">{movie.title}</td>
									<td data-cell="Desc" className='desc'>{movie.desc}</td>
									<td data-cell="Genre">{movie.genre}</td>
									<td data-cell="Img" className='img'>
										<img src={movie.img} alt={movie.img} width={50} height={50} />
									</td>
									<td data-cell="isSeries" className='isSeries'>
										{movie.isSeries ?
											<CheckIcon style={{ color: 'green' }} /> :
											<CloseIcon style={{ color: 'red' }} />
										}
									</td>
									<td data-cell="ImgSm" className='img'>
										<img src={movie.imgSm} alt={movie.imgSm} width={50} height={50} />
									</td>
									<td data-cell="Year">{movie.year}</td>
									{/* <td className='movieYT'>
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
									</td> */}
									<td data-cell="Action">
										<Button
											onClick={() => handleDelete(movie._id)}
											className='btnDelete'
											variant='contained'
											color='error'
										>
											Xóa
										</Button>
									</td>
								</tr>
							)
						}
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MovieList;