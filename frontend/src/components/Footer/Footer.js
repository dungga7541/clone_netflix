import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.scss";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='topFooter'>
				<div className='socialNetwork'>
					<div className='title'>
						<h2>Mạng xã hội</h2>
					</div>
					<div className='icon'>
						<span>
							<FacebookIcon />
						</span>
						<span>
							<InstagramIcon />
						</span>
						<span>
							<TwitterIcon />
						</span>
						<span>
							<YouTubeIcon />
						</span>
					</div>
				</div>
				<div className='centerFooter'>
					<div className='columns'>
						<p>Mô tả âm thanh</p>
						<p>Quan hệ với nhà đầu tư</p>
						<p>Thông báo pháp lý</p>
					</div>
					<div className='columns'>
						<p>Trung tâm trợ giúp</p>
						<p>Việc làm</p>
						<p>Tùy chọn cookie</p>
					</div>
					<div className='columns'>
						<p>Thẻ quà tặng</p>
						<p>Điều khoản sử dụng</p>
						<p>Thông tin doanh nghiệp</p>
					</div>
					<div className='columns'>
						<p>Trung tâm đa phương tiện</p>
						<p>Quyền riêng tư</p>
						<p>Liên hệ với chúng tôi</p>
					</div>
				</div>
				<div className='bottomFooter'>
					<div className='buttonService'>
						<p>Mã dịch vụ</p>
					</div>
					<div className=''>
						<p>CopyRight from ... Inc</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;