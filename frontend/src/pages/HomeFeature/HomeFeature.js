import React from 'react';
import Featured from './../../components/Featured/Featured';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import List from '../../components/List/List';


const HomeFeature = ({ type, user }) => {
	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);
	const axiosInstance = axios.create
		({
			baseURL: process.env.REACT_APP_API_URL,
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
		<div>
				<Featured type={type} setGenre={setGenre} />
				{lists.map((list, i) => (
					<List key={i} list={list} />
				))}
		</div>
	);
};
			
export default HomeFeature;