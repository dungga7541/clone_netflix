import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import imgUser from "../../assets/image/f53815f7-4cb8-48f8-b0c1-b9cdf0e34854.jpg";
import { AuthContext } from './../../context/authContext/authContext';
import { logout } from '../../context/authContext/apiCalls';


const Navbar = () => {
	const [isScrolled,setIsScrolled] = useState(false);
	const { isFetching, dispatch } = useContext(AuthContext);
	const { user } = useContext(AuthContext);
	window.onscroll =()=>{
		setIsScrolled(window.pageYOffset=== 0?false:true);
		return ()=> (window.onscroll = null);
	}


	const Logout = async (e) => {
		try {
			e.preventDefault();
			e.stopPropagation();
			logout(null,dispatch)
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className={isScrolled ? "navbar scrolled": "navbar"}>
			<div className='navbarContent'>
				<div className="left">
					<span><img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt=""
						className='logo'
					/></span>
					
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
					<NotificationsIcon className="icon" />
					<img
						src={imgUser}
						alt=""
						className='imgUser'
					/>
					<div className="profileUser">
						<ArrowDropDownIcon className="icon" />
						<div className="options">
							<span>Cài Đặt</span>
							<span onClick={Logout}>Đăng Xuất</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;