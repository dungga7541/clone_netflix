import React from 'react';
import "./Register.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import videotv from "../../assets/video/video-tv-0819.m4v";
import DownloadingIcon from '@mui/icons-material/Downloading';
import videodevice from "../../assets/video/video-devices-vn.m4v";
import SimpleAccordion from './../../components/Mui/SimpleAccordion';
import { Link} from 'react-router-dom';

const Register = () => {
	return (
		<div className="register">
			<div className='totalContainer'>
				<div className="firstContainer">
					<div className='contentContainer'>
						<div className="top">
							<Link to="/vn/">
							<img
								className="logo"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
								alt=""
								width={120}
								height={50}
							/></Link>
							<button className="loginButton" ><Link to="/vn/login">Đăng Nhập</Link></button>
						</div>
						<div className='bottom'>
							<p className='mainTitle'>Unlimited movies, TV shows, and more.</p>
							<p className='subTitle'>Watch anywhere. Cancel anytime.</p>
							<p className='otherTitle'>
								Ready to watch? Enter your email to create or restart your membership.
							</p>
							<div className="searchBar">
								<input type="email" placeholder="email address" />
								<button className="registerButton" >
									Get Started <ArrowForwardIosIcon />
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
						<video width="450" height="400" controls="false" autoplay="autoplay" muted loop>
							<source src={videotv} type="video/mp4" />
						</video>
						<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
					</div>
				</div>
				<div className='thirdContainer'>
					<div className='imgDowload'>
						<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
						<div className='dowloadFilm'>
							<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" width={40} height={60}/>
							<div className='title'>
								<p className='mainTitle'>Cậu bé mất tích</p>
								<p className='subTitle'>Đang tải xuống ...</p>
							</div>
							<div>
								<DownloadingIcon/>
							</div>
						</div>
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
						<video width="450" height="400" controls="false" autoplay="autoplay" muted loop>
							<source src={videodevice} type="video/mp4" />
						</video>
						<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-vn.png" />
					</div>
				</div>
				<div className='fiveContainer'>
					<div className='imgDowload'>
						<img src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbtRHxTEgmwtFXR4vBnwSO9UzWSascscH0PRpGcXYVkyVez31FciwrQ4bmD41KIrsypJG4Bf54yOJL82SDLL54SGCIdZov0ySklR.png?r=df6" />
						
					</div>
					<div className='titleDowload'>
						<p className='mainTitle'>Tạo hồ sơ cho trẻ em</p>
						<p className='subTitle'>Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn.</p>
					</div>
				</div>
				<div className='questionContainer'>
					<SimpleAccordion/>
				</div>
			</div>
		</div>
	);
};

export default Register;