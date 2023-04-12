import React, { useRef, useState } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ListItem from '../ListItem/ListItem';
import "./List.scss";

const List = ({ list }) => {	
	return (
		<div className="list">
			<h1 className="listTitle">{list.title}</h1>
			<div className="wrapper">

				<div className="container" >
					{list.content.slice(0, 8).map((item, i) => (
						<ListItem key={i} index={i} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default List;