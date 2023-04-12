import React, { useContext, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext/authContext';
import { login } from '../../context/authContext/apiCalls';
import Sidebar from '../../../components/SideBar/SideBar';

export default function Login  () {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isFetching, dispatch } = useContext(AuthContext);


	const signIn = async (e) => {
		try {
			e.preventDefault();
			e.stopPropagation();
			login({ email, password }, dispatch)
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
					<Sidebar/>

			<input onChange={(event) => { setEmail(event.target.value) }} />
			<input onChange={(event) => { setPassword(event.target.value) }} />
			<button onClick={signIn} disabled={isFetching}>đăng nhập</button>
		</div>

	);
};

