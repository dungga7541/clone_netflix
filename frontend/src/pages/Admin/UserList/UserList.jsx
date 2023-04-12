import React, { useEffect, useState,useContext} from 'react';
import "./UserList.scss";
import axios from "axios";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from '../../../components/SideBar/SideBar';

const UserList = () => {
	const [userList, setAllUsers] = useState([]);
	useEffect(() => {
		const getAllUsers = async () => {
			try {
				const res = await axios.get("http://localhost:8000/api/users", {
					headers: {
						token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
					},
				})
				setAllUsers(res.data);
			} catch (err) {
				console.log(err);
			}
		}
		getAllUsers()
	}, []);
	return (
		<div className='userList'>
					<Sidebar/>

			<div>
				<table>
					<tbody>
						<tr>
							<th>STT</th>
							<th>Tên người dùng</th>
							<th>Email</th>
							<th>Admin</th>
							<th>Img</th>
							<th>Action</th>
						</tr>
						{userList.map((user,i) => {
							return (
								<tr key={user._id}>
									<td>{i}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.isAdmin ? <CheckIcon style={{color:'green'}}/> : <CloseIcon style={{color:'red'}}/>}</td>
									<td><img src={user.profilePic} alt={user.profilePic}/></td>
									<td>
										<button>edit</button>
										<button>delete</button>
									</td>
								</tr>
							)
						}
						)}
					</tbody>
				</table>
				<p></p>
			</div>

		</div>
	);
};


export default UserList;