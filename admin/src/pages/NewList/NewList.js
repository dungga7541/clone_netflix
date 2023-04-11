import React, { useContext, useEffect, useState } from 'react';
import "./NewList.scss";

import { getMovies } from '../../context/movieContext/apiCalls';
import { MovieContext } from './../../context/movieContext/movieContext';
import { ListContext } from '../../context/listContext/listContext';
import { createList } from './../../context/listContext/apiCalls';
import { useNavigate } from 'react-router-dom';
const NewList = () => {
	const [list, setList] = useState(null);
	const { dispatch } = useContext(ListContext);
	const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
	const navigate =useNavigate();
	
	useEffect(() => {
		getMovies(dispatchMovie)
	},[dispatchMovie])

	const handleChange = (e) => {
		const value = e.target.value;
		setList({ ...list, [e.target.name]: value });
	}
	const handleSelect = (e) => {
		console.log(e)
		let value=Array.from(e.target.selectedOptions,(option) => option.value);
		setList({ ...list, [e.target.name]: value });
	}
	console.log(list)
	const handleSubmit = (e) => {
		e.preventDefault();
		createList(list,dispatch)
		navigate("/lists")
	}

	console.log(list)
	return (
		<div className='newMovie'>
			<form>
				<div className='aaa'>
					<h1>Title</h1>
					<input type='text' placeholder='Popular Movies' name="title" onChange={handleChange} />
				</div>
				<div className='aaa'>
					<h1>Genre</h1>
					<input type='text' placeholder='action' name="genre" onChange={handleChange} />
				</div>
				<div className='aaa'>
					<h1>Type</h1>
					<select name="type" onChange={handleChange}>
						<option>Type</option>
						<option value="movie">Movie</option>
						<option value="series">Series</option>
					</select>
				</div>
				<div className='aaa'>
					<h1>Type</h1>
					<select 
						multiple name="content" onChange={handleSelect} style={{ height: "280px" }}>
						{movies.map((movie) => (
							<option key={movie._id} value={movie._id}>{movie.title}</option>
						))}
					</select>
				</div>
				<button onClick={handleSubmit}>Create</button>


			</form>
		</div>
	);
};

export default NewList;