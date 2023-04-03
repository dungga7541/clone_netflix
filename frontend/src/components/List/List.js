import React,{useRef,useState} from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ListItem from '../ListItem/ListItem';
import "./List.scss";

const List = ({ list }) => {
	const [isMoved, setIsMoved] = useState(false);
	const [slideNumber, setSlideNumber] = useState(0);
	return (
		<div className="list">
		<span className="listTitle">{list.title}</span>
		<div className="wrapper">
		  <ArrowBackIosOutlinedIcon
			className="sliderArrow left"
			style={{ display: !isMoved && "none" }}
		  />
		  <div className="container" >
			{list.content.map((item, i) => (
			  <ListItem index={i} item={item} />
			))}
		  </div>
		  <ArrowForwardIosOutlinedIcon
			className="sliderArrow right"
		  />
		</div>
	  </div>
	);
};

export default List;