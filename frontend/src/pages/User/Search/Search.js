import React, { useEffect, useState } from 'react';
import axios from "axios";
import ListItem from '../../../components/ListItem/ListItem';
import "./Search.scss";
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AddIcon from '@mui/icons-material/Add';
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

	const searchInfo = useSelector(state => state.search.searchInfo)
	return (
		<div className='search'>
			<div className='category'>
				<p><TrendingUpTwoToneIcon />Thịnh hành</p>
				<a><LocalFireDepartmentOutlinedIcon />Phổ biến</a>
				<a><StarOutlineIcon />Chất lượng cao</a>
				<a><AddIcon />Mới thêm vào</a>
			</div>
			<div className='paginationGenre'>
				<p className='sortItem'>All</p>
				<p className='sortItem'>All</p>
				<p className='sortItem'>All</p>
				<p className='sortItem'>All</p>
				<a>Drama</a>
				<a>Drama</a>
				<a>Drama</a>
				<a>Drama</a>
				<a>Drama</a>
				<p className='sortItem'>All</p>
				<p className='sortItem'>All</p>
				<p className='sortItem'>All</p>
				<p className='sortItem'>All</p>
				<p className='sortItem'>All</p>
				<p className='sortItem'>All</p>
			</div>
			<div className='sortBy'>
				<p className='sortTitle'>Tìm kiếm theo: </p>
				<a>Lastest</a>
				<p className='sortItem'>Year</p>
				<p className='sortItem'>A to Z</p>
				<p className='sortItem'>All</p>
			</div>
			<div className="wrapper">
				<div className="container" >
					{dataMovie.filter(movie => movie.title.toLowerCase().includes(searchInfo)).map((movie, i) => (
						<div className='itemMovie' key={i}><ListItem item={movie._id} /></div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Search;