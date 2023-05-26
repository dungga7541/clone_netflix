import React,{useState,useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.scss";
import axios from "axios"


const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const navigate =useNavigate();
	const emailRef = useRef();
	const passwordRef = useRef();
	const usernameRef = useRef();
	const axiosInstance = axios.create
	({
		baseURL:process.env.REACT_APP_API_URL,
		
	}); 

	const handleFinish = async (e) => {
		setEmail(emailRef.current.value);
		setPassword(passwordRef.current.value);
		setUsername(usernameRef.current.value);
		try {
			e.preventDefault();
			e.stopPropagation();
			await axiosInstance.post("auth/register", { username,email,password });
			navigate("/vn/login")
		} catch (error) {	
			console.log(error);
		}
	};
	return (
		<div className="login">

			<div className="container">
				<div className='contentContainer'>
					<div className="top">
						<div className="wrapper">
							<Link to="/vn/">
								<img
									className="logo"
									src="https://www.psdstamps.com/wp-content/uploads/2019/12/grunge-movies-label-png-768x512.png"
									alt=""
									width={170}
									height={90}
								/></Link>
						</div>
					</div>
					<div className='formRegis'>
						<form >
							<h1>Đăng Kí</h1>
							<input
								type="username"
								placeholder="Username"
								className='inputField'
								ref={usernameRef}
							/>
							<input
								type="email"
								placeholder="Email"
								className='inputField'
								ref={emailRef}
							/>
							<input
								type="password"
								placeholder="Password"
								className='inputField'
								ref={passwordRef}
							/>
							<button className="loginButton" onClick={handleFinish}>
								Đăng kí
							</button>
							<div className='rememberMe'>
								<div className='remember'>
									<input type='checkbox'/>
									<p>Ghi nhớ tôi</p>
								</div>
								<div>
									Bạn cần giúp?
								</div>
							</div>
							<div className='moreOptions'>
								<span>
									Đã có tài khoản ?<Link to="/vn/login"><b> Đăng nhập</b></Link>.
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;