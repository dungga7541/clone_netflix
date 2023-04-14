import { Link } from "react-router-dom";
import "./SideBar.scss";
import { useEffect, useContext } from "react";
import { AuthContext } from '../../context/authContext/authContext';
import { logout } from '../../context/authContext/apiCalls';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Sidebar() {
	const { isFetching, dispatch } = useContext(AuthContext);
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
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="infoAdmin">
					<div className="infoTitle">
						<img src={user.profilePic} alt={user.profilePic} width={40} height={40} />
						<div className="nameTitle">
							<p className="nameAdmin">{user.username}</p>
							<p>Subtitle</p>
						</div>
					</div>
					<div>
						<MoreVertIcon />
					</div>
				</div>
				<div className="sidebarMenu">
					<label className="sidebarTitle">Dashboard</label>
					<div className="sidebarList">
						<Link to="/admin/" className="link">
							<p className="sidebarListItem active">
								Home
							</p>
						</Link>
						<p className="sidebarListItem">
							Analytics(coming soon)
						</p>
						<p className="sidebarListItem">
							Sales(coming soon)
						</p>
					</div>
				</div>
				<div className="sidebarMenu">
					<label className="sidebarTitle">Quick Menu</label>
					<div className="sidebarList">
						<Link to="/admin/users" className="link">
							<p className="sidebarListItem">
								Users
							</p>
						</Link>
						<Link to="/admin/movies" className="link">
							<p className="sidebarListItem">
								Movies
							</p>
						</Link>
						<Link to="/admin/lists" className="link">
							<p className="sidebarListItem">
								Lists
							</p>
						</Link>
						<Link to="/admin/newMovie" className="link">
							<p className="sidebarListItem">
								Add Movie
							</p>
						</Link>
						<Link to="/admin/newList" className="link">
							<p className="sidebarListItem">
								Add List
							</p>
						</Link>
					</div>

				</div>
			</div>
			<Link to="/" className="link">
				<p className="backButton">
					<ExitToAppIcon /> Back
				</p>
			</Link>
		</div>
	);
}
export default Sidebar;