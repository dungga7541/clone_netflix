import React from 'react';
import Navbar from './../../components/Navbar/Navbar';
import Featured from './../../components/Featured/Featured';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import List from '../../components/List/List';
import Footer from './../../components/Footer/Footer';

const Home = ({ type,user }) => {
	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);
	const axiosInstance = axios.create
	({
		baseURL:process.env.REACT_APP_API_URL,
	});
	useEffect(() => {
		const getRandomList = async () => {
			try {
				const res = await axiosInstance.get(`lists${type ? "?type=" + type : ""} ${genre ? "&genre=" + genre : ""}`
					, {
						headers: {
							token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
						}
					});
				setLists(res.data);
			} catch (err) {
				console.error(err);
			}
		};
		getRandomList();
	}, [type, genre]);
	return (
		<div className="home">
			<Navbar user={user} className="navBar"/>
			<div className='content'>
				<Featured type={type} setGenre={setGenre} />
				{lists.map((list,i) => (
					<List key={i} list={list} />
				))}
			</div>
			<Footer/>
		</div>
	);
};

export default Home;