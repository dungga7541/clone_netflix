import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import imgUser from "../../assets/image/f53815f7-4cb8-48f8-b0c1-b9cdf0e34854.jpg";
import { AuthContext } from '../../context/authContext/authContext';
import { logout } from '../../context/authContext/apiCalls';
import logo from "../../assets/image/grunge-movies-label-png.png";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { isFetching, dispatch } = useContext(AuthContext);
	const [open, setHandleOpen] = useState(false);
	
	const { user } = useContext(AuthContext);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	}
	const handleOpen = () => {
		setHandleOpen(!open);
	};
	const Logout = async (e) => {
		try {
			e.preventDefault();
			e.stopPropagation();
			logout(null, dispatch)
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className={isScrolled ? "navbar scrolled" : "navbar"}>
			<div className='navbarContent'>
				<div className="left">
					<Link to="/" className="link"><span><img
						src={logo}
						alt=""
						className='logo'
					/></span></Link>
					{/* <span>Homepage</span> */}

					<Link to="/series" className="link">
						<span className="navbarmainLinks">Phim Series</span>
					</Link>
					<Link to="/movies" className="link">
						<span className="navbarmainLinks">Phim</span>
					</Link>
					{/* <span>New and Popular</span>
					<span>My List</span> */}
				</div>
				<div className="right">
					<div className="searchBox" >
						<input type='text' className='searchInput' placeholder='Tìm kiếm...' />
						<a>
							<SearchOutlinedIcon className="searchBtn" />
						</a>
					</div>
					<div class="dropdownNoti">
						<NotificationsIcon />
						<div class="notiContent">
							<div className='notiItem'><img src={user.profilePic} width={50} height={50} alt={user.profilePic}/><p>Nhắc nhở nổi dung mới:(Comming soon)</p></div>
						</div>
					</div>
					<img
						src={user.profilePic}
						alt=""
						className='imgUser'
						onClick={handleOpen}
					/>
					<div className="profileUser">
						{open === true ?
							<div>
								<div className="btnDropDown" onClick={handleOpen}><ExpandLessIcon style={{ width: "20px", height: "20px" }} />
									{open ?
										<div className="options">
											<span>Tài Khoản</span>
											{user.isAdmin ? <Link to="/admin/">
												<span >Admin</span>
											</Link> : ""}
											<span onClick={Logout}>Đăng Xuất</span>
										</div> :
										""}
								</div>
							</div> : <div className="btnDropDown" onClick={handleOpen}>
								<ExpandMoreIcon style={{ width: "20px", height: "20px" }} />
							</div>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;