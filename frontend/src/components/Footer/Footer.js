import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Footer.scss";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='topFooter'>
				<div className='leftFooter'>
					<div className='title'>
						<h3>Điều khoản của chúng tôi</h3>
						<h3>Chính sách bảo mật</h3>
						<h3>Câu hỏi thường gặp</h3>
						<h3>Danh sách theo dõi</h3>
					</div>
					<div className='icon'>
						<p>
							© 2999 Cocomovie. Tất cả các video và chương trình trên nền tảng này là thương hiệu của, và tất cả các hình ảnh và nội dung liên quan là tài sản của Cocomovie Inc. Việc sao chép và sao chép nội dung này đều bị nghiêm cấm.
						</p>
					</div>
				</div>
				<div className='centerFooter'>
					<div className='buttonService'>
						<h2>Theo dõi chúng tôi trên :</h2>
					</div>
					<div className='icon'>
						<span><FacebookIcon /></span>
						<span><TwitterIcon /></span>
						<span><LinkedInIcon /></span>
						<span><YouTubeIcon /></span>
						<span><InstagramIcon /></span>
						<span><GitHubIcon /></span>
					</div>
				</div>
				<div className='rightFooter'>
					<div >
						<h2>Chúng tôi có trên :</h2>
						<div className='getUs'>
							<img src="https://templates.iqonic.design/streamit/frontend/html/images/footer/01.jpg" alt="logo_chplay" height={40} width={120} />
							<img src="https://templates.iqonic.design/streamit/frontend/html/images/footer/02.jpg" alt="logo_apple" height={40} width={120} />

						</div>
					</div>
				</div>
			</div>

			<div className='bottomFooter'>
				<div className='copyRight'>
					<p>CopyRight @ Cocomovie Inc all reserved</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;