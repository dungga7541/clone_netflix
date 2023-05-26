import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import "./UserInfo.scss";
import axios from "axios";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { updateUser } from './../../../context/userContext/apiCalls';
import { UserContext } from '../../../context/userContext/userContext';
import storage from '../../../firebase-config';


const UserInfo = () => {
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const params = useParams();
	const { dispatch } = useContext(UserContext);
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
	const handleChange = async (e) => {
		const value = e.target.value;
		e.preventDefault();
		setUser({ ...user, [e.target.name]: value });
	}
	const handleUpload = (e) => {
		e.preventDefault();
		upload([
			{ file: profilePic, label: "profilePic" },
		])
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		updateUser(user, dispatch)
		navigate("/admin/users")
	}
	return (
		<div className='userInfo'>
			<form>
				<div className='aaa'>
					<div>
						<h1>Email</h1>
						<input type='text' name="email" value={user.email} onChange={handleChange} />
						<h1>Username</h1>
						<input type='text' name="username" value={user.username} onChange={handleChange} />
						<h1>image</h1>
						<img src={user.profilePic} name="profilePic" alt={user.profilePic} height={20} width={20} />
						<input type='file' id='img' name="profilePic" defaultValue={user.profilePic} onChange={e => setProfilePic(e.target.files[0])} />
					</div>
				</div>
				{uploaded === 1 ? (
					<div className='btnUpload'>
						<div className='avc'>
							<button className="btnUpdate" onClick={handleSubmit}>
								Update
							</button>
							<label style={{ color: "green" }}>
								Đã Upload Xong
							</label>
						</div>
					</div>
				) : (
					<div className='btnUpload'>
						<div className='avc'>
							<button className="btnUpdate" onClick={handleUpload}>
								Upload Data
							</button>
							<label style={{ color: "red" }}>
								Chưa Upload Xong
							</label>
						</div>


					</div>
				)}

			</form>
		</div>
	);
};

export default UserInfo;