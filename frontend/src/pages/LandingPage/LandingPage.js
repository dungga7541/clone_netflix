import React from 'react';
import "./LandingPage.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import videodevice from "../../assets/video/video-devices-vn.m4v";
import { Link } from 'react-router-dom';
import logo from "../../assets/image/logo.png";
import imgOnScreen from "./../../assets/video/yt1s.com - Kdrama Pinocchio Trailer.mp4"
import Footer from './../../components/Footer/Footer';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';

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
							<div className='actionButtons'>
								<button className="loginButton" ><Link to="/vn/login">Đăng Nhập</Link></button>
								<button className="loginButton" ><Link to="/vn/register">Đăng Kí</Link></button>
							</div>
						</div>
						<div className='bottom'>
							<p className='mainTitle'>Chào mừng đến với CocoMovie<span></span></p>
							<p className='subTitle'>Bạn có thể xem phim ở bất cứ đâu</p>
							<p className='otherTitle'>
								Xem những bộ phim và nhận những thông báo mới nhất.
							</p>
							<button className="registerButton" >
								Xem thêm <KeyboardDoubleArrowRightTwoToneIcon />
							</button>
						</div>
					</div>
				</div>
				<div className='secondContainer'>
					<div className='title'>
					
						<p className='mainTitle'>Về chúng tôi</p>
						<p className='subTitle'>Cocomovie là một nền tảng toàn cầu với các tính năng hàng đầu cho phép người dùng từ khắp nơi trên thế giới có thể xem phim và theo dõi những bộ phim sắp phát sóng.</p>
					</div>
					<div className='slideVideo'>
						<img src="https://amc-theatres-res.cloudinary.com/image/upload/v1634244658/amc-cdn/general/on-demand/_2021/refresh/rev/VOD_1022_Q22021ATODRefresh_LandingPageZones_Parallax_PlaceForMoviesMobile.jpg" alt="" width={600} height={400}/>
					</div>
				</div>
				<div className='thirdContainer'>
					<div className='imgDowload'>
						<img src="https://img.freepik.com/free-vector/elegant-retro-film-strip-design-black-background_1017-42670.jpg" alt="" />

					</div>
					<div className='titleDowload'>
						<p className='mainTitle'>Tải xuống nội dung để xem ngoại tuyến</p>
						<p className='subTitle'>Lưu lại những nội dung yêu thích  một cách dễ dàng và luôn có thứ để xem.</p>
					</div>
				</div>
				<div className='fiveContainer'>
					<div className='title'>
						<p className='mainTitle'>Dịch vụ của chúng tôi</p>
					</div>
					<div className='ourServices'>
						<div className='serviceItem'>
							<img src='https://static.vecteezy.com/system/resources/previews/004/985/888/original/friends-watching-films-flat-illustration-boys-girl-in-3d-glasses-enjoy-tv-series-movie-at-home-students-eating-popcorn-isolated-cartoon-characters-with-outline-elements-on-white-background-vector.jpg' width={120} height={120}/>
							<div className='infoService'>
								<p>Xem phim cùng bạn bè ở mọi nơi</p>
							</div>
						</div>
						<div className='serviceItem'>
							<img src='https://cdn-icons-png.flaticon.com/512/4221/4221927.png' width={120} height={120} style={{background:"white",padding:"0 20px"}}/>
							<div className='infoService'>
								<p>Không giới hạn phim và truyền hình</p>
							</div>
						</div>
						<div className='serviceItem'>
							<img src='https://static.vecteezy.com/system/resources/previews/004/985/888/original/friends-watching-films-flat-illustration-boys-girl-in-3d-glasses-enjoy-tv-series-movie-at-home-students-eating-popcorn-isolated-cartoon-characters-with-outline-elements-on-white-background-vector.jpg' width={120} height={120}/>
							<div className='infoService'>
								<p>Watch any movie with your friend</p>
							</div>
						</div>
						<div className='serviceItem'>
							<img src='https://static.vecteezy.com/system/resources/previews/004/985/888/original/friends-watching-films-flat-illustration-boys-girl-in-3d-glasses-enjoy-tv-series-movie-at-home-students-eating-popcorn-isolated-cartoon-characters-with-outline-elements-on-white-background-vector.jpg' width={120} height={120}/>
							<div className='infoService'>
								<p>Watch any movie with your friend</p>
							</div>
						</div>
						<div className='serviceItem'>
							<img src='https://static.vecteezy.com/system/resources/previews/004/985/888/original/friends-watching-films-flat-illustration-boys-girl-in-3d-glasses-enjoy-tv-series-movie-at-home-students-eating-popcorn-isolated-cartoon-characters-with-outline-elements-on-white-background-vector.jpg' width={120} height={120}/>
							<div className='infoService'>
								<p>Watch any movie with your friend</p>
							</div>
						</div>
					</div>
				</div>

				<div className='fourContainer'>
					<div className='title'>
						<p className='mainTitle'>Đối tác của chúng tôi</p>
					</div>
					<div className='ourPartner'>
						<img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logoNetflix" width={200} height={200}/>
						<img src="https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png" alt="logoNetflix" width={200} height={200}/>
						<img src="https://www.logo.wine/a/logo/Disney%2B/Disney%2B-Logo.wine.svg" alt="logoNetflix" width={200} height={200}/>
						<img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="logoNetflix" width={200} height={200}/>
						<img src="https://images.squarespace-cdn.com/content/v1/568e527c9cadb62c8908ea62/1578944352173-5IP340QWHWXHWIFNQ8H7/Vudu_2014_logo.svg.png" alt="logoNetflix" width={200} height={200}/>
					</div>
				</div>
				<Footer/>
			</div>
		</div>
	);
};

export default LandingPage;