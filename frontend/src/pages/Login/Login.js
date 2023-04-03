import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.scss";
const Login = () => {
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
							/>
							<input
								type="password"
								placeholder="Password"
								className='inputField'
							/>
							<button className="loginButton" >
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