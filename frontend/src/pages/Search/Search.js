import React, { useEffect, useState } from 'react';
import axios from "axios";
import ListItem from '../../components/ListItem/ListItem';
import "./Search.scss";

import { useSelector } from 'react-redux';

const Search = () => {
	const [dataMovie, setDataMovie] = useState([]);
	const axiosInstance = axios.create
		({
			baseURL: process.env.REACT_APP_API_URL,
		});
	useEffect(() => {
		const getSearch = async () => {
			try {
				const res = await axiosInstance.get("/movies", {
					headers: {
						token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
					},
				});
				setDataMovie(res.data);
			} catch (err) {
				setDataMovie("");
			}
		}
		getSearch();
	});

	const searchInfo= useSelector(state => state.search.searchInfo)
	console.log("adasdas",searchInfo);
	// console.log("Dasdadas",dataMovie.filter(movie=>movie.title.toLowerCase().includes(searchInfo)));
	// movie=>movie.title.toLowerCase().includes(searchInfo)
	return (
		<div className='search'>
			<div className='paginationGenre'>
				<div className='listGenre'>
					<p className='listsItemTitle'>Thể loại</p>
					<p className='listsItem'>Phim Hành Động</p>
					<p className='listsItem'>Phim Hàn Quốc</p>
					<p className='listsItem'>Phim Tình Cảm</p>
					<p className='listsItem'>Phim Kinh Dị</p>
					<p className='listsItem'>Phim Hành Động</p>
				</div>
				<div className='sortGenre'>
					<select name="genre" id="genre">
							<option>Bộ lọc phim</option>
							<option value="">Phim mới nhất</option>
							<option value="">Phim cũ nhất</option>
							<option value="">Đánh giá từ thấp đến cao</option>
							<option value="">Đánh giá từ cao đến thấp</option>
							<option value="">Phim được nhiều người xem</option>
							<option value="">Phim được yêu thích nhiều nhất</option>
						</select>
				</div>
			</div>
			<div className='content'>
				{dataMovie.filter(movie=>movie.title.toLowerCase().includes(searchInfo)).map((movie,i) => (
					<p className='itemMovie' key={i}><ListItem item={movie._id}/></p>
				))}
			</div>
		</div>
	);
};

export default Search;