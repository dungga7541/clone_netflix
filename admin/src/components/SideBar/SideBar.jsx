import { Link } from "react-router-dom";
import "./SideBar.scss";
import { useEffect, useContext } from "react";
import { AuthContext } from '../../context/authContext/authContext';
import { logout } from '../../context/authContext/apiCalls';

function Sidebar() {
	const { isFetching, dispatch } = useContext(AuthContext);
	const { user } = useContext(AuthContext);
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
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<Link to="/" className="link">
							<li className="sidebarListItem active">
								Home
							</li>
						</Link>
						<li className="sidebarListItem">
							Analytics
						</li>
						<li className="sidebarListItem">
							Sales
						</li>
						{user ? <Link to="/login" className="link">
							<li className="sidebarListItem active" onClick={Logout}>
								Logout
							</li>
						</Link>:"" }
						{user ? "":<Link to="/login" className="link">
							<li className="sidebarListItem active" >
								Login
							</li>
						</Link>}
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarList">
						<Link to="/users" className="link">
							<li className="sidebarListItem">
								Users
							</li>
						</Link>
						<Link to="/movies" className="link">
							<li className="sidebarListItem">
								Movies
							</li>
						</Link>
						<Link to="/lists" className="link">
							<li className="sidebarListItem">
								Lists
							</li>
						</Link>
						<Link to="/newMovie" className="link">
							<li className="sidebarListItem">
								Add Movie
							</li>
						</Link>
						<Link to="/newList" className="link">
							<li className="sidebarListItem">
								Add List
							</li>
						</Link>
						<Link to="/newUser" className="link">
							<li className="sidebarListItem">
								New User
							</li>
						</Link>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Notifications</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							Mail
						</li>
						<li className="sidebarListItem">
							Feedback
						</li>
						<li className="sidebarListItem">
							Messages
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Staff</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							Manage
						</li>
						<li className="sidebarListItem">
							Analytics
						</li>
						<li className="sidebarListItem">
							Reports
						</li>

					</ul>

				</div>
			</div>
		</div>
	);
}
export default Sidebar;