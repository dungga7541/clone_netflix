import React, { useState, useEffect, useContext, useRef } from 'react';
import "./EditUser.scss";
import userImg from "../../../assets/image/f53815f7-4cb8-48f8-b0c1-b9cdf0e34854.jpg";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Routes, Route, NavLink } from 'react-router-dom';
import Info from './Info/Info';
import Payment from './Payment/Payment';
// import storage from '../../../firebase-config';
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
// import { updateUser } from '../../../../context/userContext/apiCalls';
// import { UserContext } from '../../../../context/userContext/userContext';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import storage from '../../../firebase-config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { updateUser } from './../../../context/userContext/apiCalls';
import { UserContext } from '../../../context/userContext/userContext';
import { AuthContext } from '../../../context/authContext/authContext';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { toast } from 'react-toastify';
import Moment from 'moment';


const EditUser = () => {
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const params = useParams();
	const { dispatch } = useContext(UserContext);
	const { dispatch: authDispatch } = useContext(AuthContext);
	const [uploaded, setUploaded] = useState(0);
	const [profilePic, setProfilePic] = useState(null);

	const axiosInstance = axios.create
		({
			baseURL: process.env.REACT_APP_API_URL,
		});
	const upload = (items) => {
		items.forEach((item) => {
			const fileName = new Date().getTime() + item.label + item.file.name;
			const storageRef = ref(storage, `/items/${fileName}`);
			const uploadTask = uploadBytesResumable(storageRef, item.file);
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress = (snapshot.bytesTransferred / snapshot.TotalBytes) * 100;
					console.log("Upload is" + progress + "% done.");
				},
				(err) => { console.log(err); },
				() => {
					// uploadTask.snapshot.downloadURL
					getDownloadURL(uploadTask.snapshot.ref).then(url => {
						setUser(prev => {
							console.log(prev)
							return { ...prev, [item.label]: url };
						});
						setUploaded((prev) => prev + 1);
					});
				});
		})
	}
	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await axiosInstance.get("users/find/" + params.userId, {
					headers: {
						token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
					},
				});
				setUser(res.data);
			} catch (err) {
				console.log(err);
			}
		}
		getUser();
	}, []);
	// const handleChange = async (e) => {
	// 	const value = e.target.value;
	// 	e.preventDefault();
	// 	setUser({ ...user, [e.target.name]: value });
	// }
	const handleUpload = (e) => {
		e.preventDefault();
		// const value = e.target.value;
		upload([
			{ file: profilePic, label: "profilePic" },
		])
		// setUser({ ...user, profilePic: value });


	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateUser(user, dispatch, authDispatch)
		toast.success("Thay đổi ảnh đại diện thành công")
	}
	const refInput = useRef(null);

	const handleClick = (e) => {
		refInput.current.click()
	}
	//format Date
	var check = Moment(user.createdAt, 'YYYY/MM/DD'); var month = check.format('M'); var day = check.format('D'); var year = check.format('YYYY');
	return (
		<div className='editUser'>
			<div className='contentEditUser'>
				<div className='leftEdit'>
					<div className='nameUser'>
						<p>{user.username}</p>
						<p>{user.email}</p>
					</div>
					<div className='uploadImgUser'>
						<div className='imgUser'>
							<img alt={user.profilePic} src={user.profilePic} width={180} height={180} />
							<div>
								<input type='file' id='img' name="profilePic" ref={refInput} className='profilePic' defaultValue={user.profilePic} onChange={e => setProfilePic(e.target.files[0])} />
								{/* <input type="button" value="Browse..."  /> */}

								<AddPhotoAlternateIcon className='iconProfilePic' onClick={handleClick} />
							</div>

							{uploaded === 1 ? (
								<div className='btnUpload'>
									<label style={{ color: "green" }}>
										Đã Upload Xong
									</label>
									<div className='avc'>
										<button className="btnUpdate" onClick={handleSubmit}>
											Update
										</button>

									</div>
								</div>
							) : (
								<div className='btnUpload'>
									<label style={{ color: "red" }}>
										Chưa Upload Hình Ảnh
									</label>
									<div className='avc'>
										<button className="btnUpdate" onClick={handleUpload}>
											Upload Img
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
					<div className='moreInfoUser'>
						<p>Thành Viên Từ:<br/> Ngày {day},Tháng {month},Năm {year}</p>
					</div>
				</div>
				<div className='rightEdit'>
					<div className='titleEditProfile'>
						<div className='changeInfo'>
							<h1>Chỉnh sửa thông tin </h1>
							<div className='changeInfoTotal'>
								<div className="title">
									<NavLink
										to={{ pathname: "/editProfile/" + user._id+"/info"}}
										className={({ isActive }) => isActive? "active": ""}
										>
										<p>Thông tin cá nhân</p>
									</NavLink>
									<NavLink
										to={{ pathname: "/editProfile/"+ user._id+"/payment" }}
										className={({ isActive }) => isActive? "active" : ""}>
										<p>Thông tin thanh toán(comming soon)</p>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
					<div className='contentChangeInfo'>
						<Routes>
							<Route path="/info" exact element={<Info />} />
							<Route path="/payment" element={<Payment />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditUser;