import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import "./Lists.scss";
import { ListContext } from '../../context/listContext/listContext';
import { getLists ,deleteList } from '../../context/listContext/apiCalls';
import { Link } from 'react-router-dom';


const Lists = () => {
	const { lists, dispatch } = useContext(ListContext);
	useEffect(() => {
		getLists(dispatch);
	}, [dispatch])
	console.log(lists)
	const handleDelete=(id)=>{
		deleteList( id,dispatch );
	}
	return (
		<div className='lists'>
			<div>
				<table>
					<tbody>
						<tr>
							<th>List title</th>
							<th>Genre</th>
							<th>Type</th>
							<th>Action</th>
						</tr>
						{lists.map((list, i) => {
							return (
								<tr key={i}>
									<td>{list.title}</td>
									<td>{list.genre}</td>
									<td>{list.type}</td>
									<td>
									<Link to={{pathname:"/lists/find/"+ list._id,list:list}}><button>edit</button></Link>
										<button onClick={()=>handleDelete(list._id)}>delete</button>
									</td>
								</tr>
							)
						}
						)}
					</tbody>
				</table>
				<p></p>
			</div>

		</div>	
	);
};

export default Lists;