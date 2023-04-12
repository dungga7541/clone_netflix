import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, } from "react-router-dom";
import "./List.scss";
import axios from "axios";
import Sidebar from '../../../components/SideBar/SideBar';


const List = () => {
	const params = useParams();
	const [list, setList] = useState([]);
	console.log(params.listId)
	useEffect(() => {
		const getList = async (e) => {
			try {
				const res = await axios.get("http://localhost:8000/api/lists/find/" + params.listId, {
					headers: {
						token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
					},
				})
				setList(res.data);
			} catch (err) {
				console.log(err);
			}
		}
		getList()
	}, []);
	return (
		<div>
					<Sidebar/>

			<div className="product">
				<div className="productTitleContainer">
					<h1 className="productTitle">List</h1>
					<Link to="/newList">
						<button className="productAddButton">Create</button>
					</Link>
				</div>
				<div className="productTop">
					<div className="productTopRight">
						<div className="productInfoTop">
							<span className="productName">{list.title}</span>
						</div>
						<div className="productInfoBottom">
							<div className="productInfoItem">
								<span className="productInfoKey">id:</span>
								<span className="productInfoValue">{list._id}</span>
							</div>
							<div className="productInfoItem">
								<span className="productInfoKey">genre:</span>
								<span className="productInfoValue">{list.genre}</span>
							</div>
							<div className="productInfoItem">
								<span className="productInfoKey">type:</span>
								<span className="productInfoValue">{list.type}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;