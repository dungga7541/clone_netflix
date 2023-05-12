import React, { useEffect, useState,useContext} from 'react';
import "./UserList.scss";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import imgUser from "../../../assets/image/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";
import { UserContext } from '../../../context/userContext/userContext';
import { deleteUser, getUsers } from './../../../context/userContext/apiCalls';
import { Link } from 'react-router-dom';

const UserList = () => {
	const { users, dispatch } = useContext(UserContext);
	useEffect(() => {
		getUsers(dispatch);
	}, [dispatch])
	const handleDelete = (id) => {
		deleteUser(id, dispatch);
	}
	return (
		<div className='userList'>

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
						{users.map((user,i) => {
							return (
								<tr key={user._id}>
									<td>{i}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.isAdmin ? <CheckIcon style={{color:'green'}}/> : <CloseIcon style={{color:'red'}}/>}</td>
									<td><img src={(user.profilePic) !== "" ? (user.profilePic):(imgUser)} alt={user.profilePic}/></td>
									<td>
										<Link to={{ pathname: "/admin/users/" + user._id, user}}><button className='btn btnEdit'>Edit</button></Link>
										<button className='btn btnDelete' onClick={()=>handleDelete(user._id)}>Delete</button>
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