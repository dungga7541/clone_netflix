import React from 'react';
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import HomeFeature from '../HomeFeature/HomeFeature';
import Search from './../Search/Search';
import EditUser from './../User/EditUser/EditUser';



const Home = ({ user }) => {
	return (
		<div className="home">
			<Navbar user={user} className="navBar" />
			<Routes>
				<Route path='/' element={<HomeFeature />} />
				<Route path="/movies" element={<HomeFeature type="movies" />} />
				<Route path="/series" element={<HomeFeature type="series" />} />
				<Route path="/search" element={<Search />} />
				<Route path="/editProfile" element={<EditUser/>} />
			</Routes>
			<Footer />
		</div>
	);
};

export default Home;