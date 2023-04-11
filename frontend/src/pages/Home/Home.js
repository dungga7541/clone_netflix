import React from 'react';
import Navbar from './../../components/Navbar/Navbar';
import Featured from './../../components/Featured/Featured';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import List from '../../components/List/List';

const Home = ({ type }) => {
	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);

	useEffect(() => {
		const getRandomList = async () => {
			try {
				const res = await axios.get(`lists${type ? "?type=" + type : ""} ${genre ? "&genre=" + genre : ""}`
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
	console.log("dsadasd",lists)
	return (
		<div className="home">
			<Navbar />
			<div className='content'>
				<Featured type={type} setGenre={setGenre} />
				{lists.map((list,i) => (
					<List key={i} list={list} />
				))}
			</div>
		</div>
	);
};

export default Home;