import React from 'react';
import "./LandingPage.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import videodevice from "../../assets/video/video-devices-vn.m4v";
import { Link } from 'react-router-dom';
import logo from "../../assets/image/grunge-movies-label-png.png";
import imgOnScreen from "./../../assets/video/yt1s.com - Kdrama Pinocchio Trailer.mp4" 


const LandingPage = () => {

	return (
		<div className="register">
			<div className='totalContainer'>
				<div className="firstContainer">
					<div className='contentContainer'>
						<div className="top">
							<Link to="/vn/">
								<img
									className="logo"
									src={logo}
									alt=""
									width={170}
									height={90}
								/></Link>
							<div>
								<button className="loginButton" ><Link to="/vn/login">Đăng Nhập</Link></button>
								<button className="loginButton" ><Link to="/vn/register">Đăng Kí</Link></button>
							</div>
						</div>
						<div className='bottom'>
							<p className='mainTitle'>Xem phim không giới hạn , nhiều hơn thế nữa.</p>
							<p className='subTitle'>Có thể xem ở bất cứ đâu, bất kì nơi nào</p>
							<p className='otherTitle'>
								Xem những bộ phim và nhận những thông báo mới nhất.
							</p>
							<div className="searchBar">
								<input type="email" placeholder="email address" />
								<button className="registerButton" >
									Nhận thông báo <ArrowForwardIosIcon />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='secondContainer'>
					<div className='title'>
						<p className='mainTitle'>Thưởng thức trên TV của bạn.</p>
						<p className='subTitle'>Xem trên TV thông minh , Playstation,Xbox,Chromecast ,Apple TV,Đầu phát Blu-ray và nhiều thiết bị khác.</p>
					</div>
					<div className='slideVideo'>
						<video width="450" height="400"  autoPlay muted loop>
							<source src={imgOnScreen} type="video/mp4" />
						</video>
						<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""/>
					</div>
				</div>
				<div className='thirdContainer'>
					<div className='imgDowload'>
						<img src="https://img.freepik.com/free-vector/elegant-retro-film-strip-design-black-background_1017-42670.jpg" alt=""/>

					</div>
					<div className='titleDowload'>
						<p className='mainTitle'>Tải xuống nội dung để xem ngoại tuyến</p>
						<p className='subTitle'>Lưu lại những nội dung yêu thích  một cách dễ dàng và luôn có thứ để xem.</p>
					</div>
				</div>
				<div className='fourContainer'>
					<div className='title'>
						<p className='mainTitle'>Xem ở mọi nơi.</p>
						<p className='subTitle'>Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.</p>
					</div>
					<div className='slideVideo'>
						<video width="450" height="400"  autoPlay muted loop>
							<source src={videodevice} type="video/mp4" />
						</video>
						<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-vn.png" alt=""/>
					</div>
				</div>
				<div className='fiveContainer'>
					<div className='imgDowload'>
						<img src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbtRHxTEgmwtFXR4vBnwSO9UzWSascscH0PRpGcXYVkyVez31FciwrQ4bmD41KIrsypJG4Bf54yOJL82SDLL54SGCIdZov0ySklR.png?r=df6" alt=""/>

					</div>
					<div className='titleDowload'>
						<p className='mainTitle'>Tạo hồ sơ cho trẻ em</p>
						<p className='subTitle'>Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;