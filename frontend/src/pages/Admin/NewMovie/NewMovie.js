import React, { useContext, useState } from 'react';
import "./NewMovie.scss";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../../../firebase-config';
import { createMovie } from '../../../context/movieContext/apiCalls';
import { MovieContext } from '../../../context/movieContext/movieContext';
import Sidebar from '../../../components/SideBar/SideBarmenu';



const NewMovie = () => {
	const [movie, setMovie] = useState(null);
	const [img, setImg] = useState(null);
	const [imgTitle, setImgTitle] = useState(null);
	const [imgSm, setImgSm] = useState(null);
	const [trailer, setTrailer] = useState(null);
	const [video, setVideo] = useState(null);
	const [uploaded, setUploaded] = useState(0);

	const { dispatch } = useContext(MovieContext);

	const handleChange = (e) => {
		const value = e.target.value;
		setMovie({ ...movie, [e.target.name]: value });
	}

	const upload = (items) => {
		items.forEach((item) => {
			const fileName = new Date().getTime() + item.label + item.file.name;
			const storageRef = ref(storage, `/items/${fileName}`);
			const uploadTask = uploadBytesResumable(storageRef, item.file);
			// const uploadTask = ref(storage,`/items/${fileName}`).put(item);
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress = (snapshot.bytesTransferred / snapshot.TotalBytes) * 100;
					console.log("Upload is" + progress + "% done.");
				},
				(err) => { console.log(err); },
				() => {
					// uploadTask.snapshot.downloadURL

					getDownloadURL(uploadTask.snapshot.ref).then(url => {
						setMovie(prev => {
							console.log(prev)
							return { ...prev, [item.label]: url };
						});
						setUploaded((prev) => prev + 1);
					});
				});
		})
	}
	const handleUpload = (e) => {
		e.preventDefault();
		upload([
			{ file: img, label: "img" },
			{ file: imgTitle, label: "imgTitle" },
			{ file: imgSm, label: "imgSm" },
			{ file: trailer, label: "trailer" },
			{ file: video, label: "video" },
		])
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		createMovie(movie, dispatch)
	}
	return (
		<div className='newMovie'>
			<form>
				<div className='columns'>
					<div className='aaa'>


						<h1>Title</h1>
						<input type='text' placeholder='title' name="title" onChange={handleChange} />

						<h1>Description</h1>
						<input type='text' placeholder='description' name="desc" onChange={handleChange} />

						<h1>Year</h1>
						<input type='text' placeholder='year' name="year" onChange={handleChange} />

						<h1>Genre</h1>
						<input type='text' placeholder='genre' name="genre" onChange={handleChange} />

						<h1>Duration</h1>
						<input type='text' placeholder='duration' name="duration" onChange={handleChange} />

						<h1>Limit</h1>
						<input type='text' placeholder='limit' name="limit" onChange={handleChange} />
						<h1>Is Series</h1>
						<select name="isSeries" id="isSeries" onChange={handleChange}>
							<option value="false">No</option>
							<option value="true">Yes</option>
						</select>
					</div>
					<div className='aaa'>
						<h1>image</h1>
						<input type='file' id='img' name="img" onChange={e => setImg(e.target.files[0])} />

						<h1>Title image</h1>
						<input type='file' id='imgTitle' name="imgTitle" onChange={e => setImgTitle(e.target.files[0])} />

						<h1>Thumbnail image</h1>
						<input type='file' id='imgSm' name="imgSm" onChange={e => setImgSm(e.target.files[0])} />


						<h1>Trailer</h1>
						<input type='file' id='file' name="trailer" onChange={e => setTrailer(e.target.files[0])} />

						<h1>Video</h1>
						<input type='file' id='file' name="video" onChange={e => setVideo(e.target.files[0])} />
					</div>

				</div>
				{uploaded === 5 ? (
					<div className='btnUpload'>
						<div className='avc'>
							<button className="addProductButton" onClick={handleSubmit}>
								Create Movie
							</button>
							<label style={{ color: "green" }}>
								Đã Upload Xong
							</label>
						</div>


					</div>

				) : (
					<div className='btnUpload'>
						<div className='avc'>
							<button className="addProductButton" onClick={handleUpload}>
								Upload Data
							</button>
							<label style={{ color: "red" }}>
								Chưa Upload Xong
							</label>
						</div>


					</div>
				)}
			</form>
		</div>
	);
};

export default NewMovie;