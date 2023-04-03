import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link,useNavigate} from "react-router-dom";
import "./Watch.scss";
const Watch = () => {

	const navigate = useNavigate();
	const movie = navigate.movie;
	return (
		<div className="watch">
			<Link to="/">
				<div className="back">
					<ArrowBackOutlinedIcon />
					Home
				</div>
			</Link>
			<video className="video" autoPlay progress controls  />
		</div>
	);
};
// 
export default Watch;