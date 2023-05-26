import React, { useEffect, useState,useContext} from 'react';
import "./UserList.scss";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import imgUser from "../../../assets/image/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";
import { UserContext } from '../../../context/userContext/userContext';
import { deleteUser, getUsers } from './../../../context/userContext/apiCalls';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

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
			<div className='table-userList-container'>
				<table>
					<caption>List User</caption>
					<tbody>
						<tr>
							<th>STT</th>
							<th>Tên người dùng</th>
							<th>Email</th>
							<th>Admin</th>
							<th>Img</th>
							<th>Action</th>
						</tr>
						{users.map((user, i) => {
							return (
								<tr key={user._id}>
									<td data-cell="STT">{i}</td>
									<td data-cell="UserName" className='username'>{user.username}</td>
									<td data-cell="Email" className='email'>{user.email}</td>
									<td data-cell="Admin" className='isAdmin'>
										{user.isAdmin ?
											<CheckIcon style={{ color: 'green' }} /> :
											<CloseIcon style={{ color: 'red' }} />
										}
									</td>
									<td data-cell="Img" className='imgUser'>
										<img
											src={(user.profilePic) !== "" ?
												(user.profilePic) :
												(imgUser)}
											alt={user.profilePic}
										/>
									</td>
									<td data-cell="Action" className='action'>
										<Link to={{ pathname: "/admin/users/" + user._id, user }}>
											<Button
												className='btnAction'
												variant='contained'
												color='primary'
											>
												Sửa
											</Button>
										</Link>
										<Button
											className='btnAction'
											onClick={() => handleDelete(user._id)}
											variant='contained'
											color='error'
										>
											Xóa
										</Button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};


export default UserList;