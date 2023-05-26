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
import logo from "../../assets/image/logo.png";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { updateSearch } from './../../redux/reducers/searchSlice';
import ClearIcon from '@mui/icons-material/Clear';
import SideBar from "../../components/SideBar/SideBarmenu";
import Darkmode from '../Darkmode/Darkmode';



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
						src={logo}
						alt=""
						className='logo'
					/></span></Link>
					<div className='dropdown'>
						<div className='options'>
							<p>Thể loại </p>
							<ArrowDropDownIcon />
						</div>
						<div className='dropdownContent'>
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
						</div>
					</div>
				</div>
				<div className="right">
					{/* onClick={toogleSearch} */}
					<Darkmode/>
					<div className="searchBox" >
						<div className="searchInput" >
							<Link to="/search"><input type='text' placeholder='Tìm kiếm...' value={searchText} onChange={(e) => dispatchs(updateSearch(e.target.value))} /></Link>
							<p>
								{searchText === "" ? (<Link to="/search"><SearchOutlinedIcon className="searchBtn" /></Link>) : (<ClearIcon onClick={clearSearchField} className="searchBtn" />)}
							</p>
						</div>
					</div>
					<div className="dropdownNoti">
						<NotificationsIcon className='notiIcon'/>
						{user.newNotifications.length===0?
""							:
							<span className='badge badge-warning' id='lblCartCount'>{user.newNotifications.length}</span>
						}
						<div className="notiContent">
						{user.newNotifications.length===0 ?
							<div className='notiItem'><img src=""/><p>Hiện tại không có thông báo nào cả</p></div>
							:
							<div>
							{
								(user.newNotifications).slice(0,5)?.map((noti) => (
									<div className='notiItem'><img src=""/><p>Nhắc nhở nổi dung mới:{noti}</p></div>
								))
							}
							</div>
						}	
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

											<span className='optionsItem'><Link to={{ pathname: "/editProfile/" + user._id + "/info", user }}>Tài Khoản</Link></span>
											{user.isAdmin ?
												<Link to="/admin/">
													<span className='optionsItem'>
														Admin
													</span>
												</Link> : ""}
											<span className='optionsItem' onClick={Logout}>Đăng Xuất</span>
										</div> :
										""}
								</div>
							</div> : <div className="btnDropDown" onClick={handleOpen}>
								<ExpandMoreIcon style={{ width: "20px", height: "20px" }} />
							</div>}
					</div>
				</div>
				{/* <div className='navbarMobile'>
					<SideBar/>
				</div> */}
			</div>
		</div>
	);
};

export default Navbar;