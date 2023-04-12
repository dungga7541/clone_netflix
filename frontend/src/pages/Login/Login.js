import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import "./Login.scss";
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from './../../context/authContext/authContext';

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isFetching, dispatch } = useContext(AuthContext);

	const signIn = async (e) => {
		try {
			e.preventDefault();
			e.stopPropagation();
			login({ email, password }, dispatch)
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
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
									alt=""
									width={120}
									height={50}
								/></Link>
						</div>
					</div>
					<div className='formLogin'>
						<form >
							<h1>Đăng Nhập</h1>
							<input
								type="email"
								placeholder="Email or phone number"
								className='inputField'
								onChange={(event) => { setEmail(event.target.value) }}
							/>
							<input
								type="password"
								placeholder="Password"
								className='inputField'
								onChange={(event) => { setPassword(event.target.value) }}
							/>
							<button className="loginButton" onClick={signIn}>
								Đăng nhập
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
									Bạn mới tham gia Netflix <b>Đăng kí ngay</b>.
								</span>
								<small>
									Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot. <b>Tìm hiểu thêm</b>.
								</small>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;