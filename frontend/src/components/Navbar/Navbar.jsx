import React, { useEffect, useCallback } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import imgUser from "../../assets/image/f53815f7-4cb8-48f8-b0c1-b9cdf0e34854.jpg";
import { AuthContext } from '../../context/authContext/authContext';
import { logout } from '../../context/authContext/apiCalls';
import logo from "../../assets/image/grunge-movies-label-png.png";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { updateSearch } from './../../redux/reducers/searchSlice';
import ClearIcon from '@mui/icons-material/Clear';
const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { isFetching, dispatch } = useContext(AuthContext);
	const [open, setHandleOpen] = useState(false);
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	//search

	const [searchInfo, setSearchInfo] = useSelector((state) => state.search.searchInfo);
	const [isSearch, setIsSearch] = useState(false);
	const dispatchs = useDispatch();
	const toogleSearch = () => {
		setIsSearch(!isSearch);
	}
	const clearSearchField = () => {
		setIsSearch(!isSearch);
		dispatchs(updateSearch(""))
	}
	const searchText = useSelector(state => state.search.searchInfo)

	//

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
						src="https://www.psdstamps.com/wp-content/uploads/2019/12/grunge-movies-label-png-768x512.png"
						alt=""
						className='logo'
					/></span></Link>
					{/* <span>Homepage</span> */}
					<Link to="/" className="link">
						<span className="navbarmainLinks">Trang Chủ</span>
					</Link>
					<Link to="/series" className="link">
						<span className="navbarmainLinks">Phim Series</span>
					</Link>
					<Link to="/movies" className="link">
						<span className="navbarmainLinks">Phim</span>
					</Link>
					<Link to="/" className="link">
						<span className="navbarmainLinks">Danh sách của tôi</span>
					</Link>
					{/* <span>New and Popular</span>
					<span>My List</span> */}
				</div>
				<div className="right">
					<div className="searchBox" onClick={toogleSearch}>
						<div className="searchInput" >
							<Link to="/search"><input type='text' placeholder='Tìm kiếm...' value={searchText} onChange={(e) => dispatchs(updateSearch(e.target.value))} /></Link>
							<p>
								{searchText === "" ? (<SearchOutlinedIcon className="searchBtn" />) : (<ClearIcon onClick={clearSearchField} className="searchBtn" />)}
							</p>
						</div>
					</div>
					<div className="dropdownNoti">
						<NotificationsIcon />
						<div className="notiContent">
							<div className='notiItem'><img src={user.profilePic} width={50} height={50} alt={user.profilePic} /><p>Nhắc nhở nổi dung mới:(Comming soon)</p></div>
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