import React from 'react';
import Navbar from './../../components/Navbar/Navbar';
import Featured from './../../components/Featured/Featured';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import List from '../../components/List/List';

const Home = ({type}) => {
	const [lists,setLists] =useState([]);
	const [genre,setGenre] =useState(null);

	useEffect(()=>{
		const getRandomList= async()=>{
			try{
				const res = await axios.get(`lists${type ? "?type="+type : ""} ${genre ? "&genre="+genre :""}`
				,{headers:{
					token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmEwMDY3OTY0ZjhkNzBhMTMwNjUxZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDQ3NDIzNSwiZXhwIjoxNjgwOTA2MjM1fQ.LITtXBGF4ORLrB-xeuZ-OFAVV-C3hoyX1vQfE-ySb6Y"
				}});
				console.log(res);
				setLists(res.data);

			}catch(err){
				console.error(err);
			}
		};
		getRandomList();
	},[type,genre]);
	console.log(lists);
	return (
		<div className="home">
		<Navbar />
		<Featured type={type} setGenre={setGenre} />
		{lists.map((list) => (
		  <List list={list}/>
		))}
	  </div>
	);
};
			
export default Home;