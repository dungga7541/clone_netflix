import React, { useRef, useState ,useContext,useEffect} from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./Lists.scss";
import { ListContext } from '../../../context/listContext/listContext';
import { getLists, deleteList } from '../../../context/listContext/apiCalls';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const Lists = ({ list }) => {
	const { lists, dispatch } = useContext(ListContext);
	useEffect(() => {
		getLists(dispatch);
	}, [dispatch])
	const handleDelete = (id) => {
		deleteList(id, dispatch);
	}
	return (
		<div className='lists'>
		<div className='table-list-container'>
			<table>
				<caption>List</caption>
				<tbody>
					<tr className='table-list-title'>
						<th>Title</th>
						<th>Genre</th>
						<th>Type</th>
						<th>Action</th>
					</tr>
					{lists.map((list, i) => {
						return (
							<tr key={i}>
								<td data-cell="Title">{list.title}</td>
								<td data-cell="Genre">{list.genre}</td>
								<td data-cell="Type">{list.type}</td>
								<td data-cell="Action">
									<Button
										onClick={() => handleDelete(list._id)}
										className='btnDelete'
										variant='contained'
										color='error'
									>
										Xóa
									</Button>
								</td>
							</tr>
						)
					}
					)}
				</tbody>
			</table>
		</div>
	</div>
	);
};

export default Lists;