import React, { useState, useEffect } from 'react';
import "./Info.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from './../../../../context/userContext/userContext';
import { AuthContext } from './../../../../context/authContext/authContext';
import { updateUser } from './../../../../context/userContext/apiCalls';
import { toast } from 'react-toastify';

const Info = () => {
	const params = useParams();
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const { dispatch } = useContext(UserContext);
	const { dispatch: authDispatch } = useContext(AuthContext);
	const axiosInstance = axios.create
		({
			baseURL: process.env.REACT_APP_API_URL,
		});
	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await axiosInstance.get("users/find/" + params.userId, {
					headers: {
						token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
					},
				});
				setUser(res.data);
			} catch (err) {
				console.log(err);
			}
		}
		getUser();
	}, []);
	const handleChange = async (e) => {
		const value = e.target.value;
		e.preventDefault();
		setUser({ ...user, [e.target.name]: value });
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateUser(user, dispatch ,authDispatch)
		window.location.reload();

		toast.success("Thay đổi thông tin cá nhân thành công")
	}
	return (
		<div className='info'>
			<div className='infoUser'>
				<div className='rowInfo'>
					<div className='inputField'>
						<h2>Email</h2>
						<input type='text' name="email"  placeholder={user.email} onChange={handleChange} />
					</div>
					<div className='inputField'>
						<h2>Username</h2>
						<input type='text' name="username"  placeholder={user.username} onChange={handleChange} />
					</div>
					<div className='inputField'>
						<h2>lorem isum</h2>
						<input disabled/>
					</div>
				</div>
				<div className='rowInfo'>

				</div>

			</div>
			<div className='btnEdit'>
				<button onClick={handleSubmit}>Thay đổi</button>
			</div>
		</div>
	);
};

export default Info;