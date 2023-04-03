import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className='navbarContent'>
				<div className="left">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt=""
						className='logo'
					/>
					<Link to="/" className="link">
						<span>Homepage</span>
					</Link>
					<Link to="/series" className="link">
						<span className="navbarmainLinks">Series</span>
					</Link>
					<Link to="/movies" className="link">
						<span className="navbarmainLinks">Movies</span>
					</Link>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className="right">
					<SearchOutlinedIcon className="icon" />
					<span>KID</span>
					<NotificationsIcon className="icon" />
					<img
						src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className='imgUser'
					/>
					<div className="profile">
						<ArrowDropDownIcon className="icon" />
						<div className="options">
							<span>Settings</span>
							<span >Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;