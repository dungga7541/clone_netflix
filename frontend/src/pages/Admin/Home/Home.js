import React from 'react';
import Sidebar from '../../../components/SideBar/SideBarmenu';
import "./Home.scss";
import { useEffect, useContext } from "react";
import { AuthContext } from './../../../context/authContext/authContext';
import UserList from './../UserList/UserList';
import MovieList from './../MovieList/MovieList';
import Movie from './../Movie/Movie';
import NewMovie from './../NewMovie/NewMovie';
import Lists from './../Lists/Lists';
import List from './../List/List';
import NewList from './../NewList/NewList';
import { Routes, Route} from "react-router-dom";


const Home = () => {
	return (
		<div className='homeAdmin'>
			<div className='sidebar'>
				<Sidebar />
			</div>
			<div className='content'>
				<Routes>
					<Route path="/users" element={<UserList />} />
					{/* <Route path="/user/:userId" element={<User />} /> */}
					<Route path="/movies" element={<MovieList />} />
					<Route path="/movie/:movieId" element={<Movie />} />
					<Route path="/newMovie" element={<NewMovie />} />
					<Route path="/lists" element={<Lists />} />
					<Route path="/lists/find/:listId" element={<List />} />
					<Route path="/newlist" element={<NewList />} />
				</Routes>
			</div>
		</div>
	);
};

export default Home;