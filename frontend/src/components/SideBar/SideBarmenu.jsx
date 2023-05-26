import { Link } from "react-router-dom";
import "./SideBarmenu.scss";
import { useEffect, useContext } from "react";
import { AuthContext } from '../../context/authContext/authContext';
import { logout } from '../../context/authContext/apiCalls';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/image/logo.png";
import BarChartIcon from '@mui/icons-material/BarChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
function Sidebarmenu() {
	const { isFetching, dispatch } = useContext(AuthContext);
	const { collapseSidebar } = useProSidebar();

	const { user } = useContext(AuthContext);
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
		<div className="sidebar" style={{ display: 'flex', height: '100%', minHeight: '10px' }}>
			<Sidebar transitionDuration={1000} >
				<div className="menuBar">
					<MenuIcon className="menuIcon" onClick={() => collapseSidebar()} />
					<Link to="/admin/" className="link">
						<img src="https://www.psdstamps.com/wp-content/uploads/2019/12/grunge-movies-label-png-768x512.png" width={150} height={50} alt={logo}/>
					</Link>
				</div>

				<div className="infoAdmin">

					<div className="infoTitle">
						<img src={user.profilePic} alt={user.profilePic} width={40} height={40}/>
						<div className="nameTitle">
							<p className="nameAdmin">{user.username}</p>
							<p>Subtitle</p>
						</div>
					</div>
				</div>

				<div className="menuContent">
					<Menu >
						<SubMenu icon={<HomeIcon name="bar-chart" />} label="Dashboard">
							<div className="menuOptions">
								<MenuItem>
									<p className="sidebarListItem">
										Analytics(coming soon)
									</p>
								</MenuItem>
							</div>
							<div className="menuOptions">
								<MenuItem>
									<p className="sidebarListItem">
										Sales(coming soon)
									</p>
								</MenuItem>
							</div>
						</SubMenu>
						<SubMenu icon={<PersonIcon name="bar-chart" />} label="Users">
							<div className="menuOptions">
								<Link to="/admin/users" className="link">
									<MenuItem>

										<p className="sidebarListItem">
											Users
										</p>
									</MenuItem>

								</Link>
							</div>
							<div className="menuOptions">
								<MenuItem>
									Add User(coming soon)
								</MenuItem>
							</div>
						</SubMenu>
						<SubMenu icon={<LocalMoviesIcon name="bar-chart" />} label="Movies">
							<div className="menuOptions">
								<MenuItem>
									<Link to="/admin/movies" className="link">
										<p className="sidebarListItem">
											Movies
										</p>
									</Link>
								</MenuItem>
							</div>
							<div className="menuOptions">
								<MenuItem>
									<Link to="/admin/newMovie" className="link">
										<p className="sidebarListItem">
											Add Movie
										</p>
									</Link>
								</MenuItem>
							</div>
						</SubMenu>
						<SubMenu icon={<ListAltIcon name="bar-chart" />} label="Lists Movie">
							<div className="menuOptions">
								<MenuItem>
									<Link to="/admin/lists" className="link">
										<p className="sidebarListItem">
											Lists
										</p>
									</Link>
								</MenuItem>
							</div>
							<div className="menuOptions">
								<MenuItem>
									<Link to="/admin/newList" className="link">
										<p className="sidebarListItem">
											Add List
										</p>
									</Link>
								</MenuItem>
							</div>
						</SubMenu>

					</Menu>
				</div>
				<div className="backBtn">
					<Link to="/" className="link">
					<ExitToAppIcon className="exitIcon"/>	

						<p className="backButton">
							Back
						</p>
					</Link>
				</div>
			</Sidebar>









			{/* <div className="sidebarWrapper">
				
				<div className="sidebarMenu">
					<label className="sidebarTitle"></label>
					<div className="sidebarList">



					</div>
				</div>
				<div className="sidebarMenu">
					<label className="sidebarTitle">Quick Menu</label>
					<div className="sidebarList">

						
						


					</div>

				</div>
			</div>
			 */}
		</div>
	);
}
export default Sidebarmenu;