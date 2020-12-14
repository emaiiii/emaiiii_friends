import React, {useState} from 'react';
import Cookies from 'js-cookie';
import {Button} from 'react-bootstrap';

import './PostUploader.css';

function PostUploader(){
	const [image,setImage] = useState(null);
	const [caption, setCaption] = useState('');
	const userId = Cookies.get('userId');

	const handleChange = (e) => {
		if(e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	function onUpload(event){
		// create state object for purpose of returning json object
		const state = {
			user_id: userId,
			image: image,
			caption: caption,
		}
		console.log(state);

		// send sign in request to the server
		fetch("http://localhost:3000/post", {
			method: "post",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				user_id: state.user_id,
				img: state.image,
				caption: state.caption
			})
		})
			.then(response => response.json())
			.catch(console.log)
	}

	return(
		<div className="postUploader">
			<input type="text" 
				className="postUploader-caption"
				placeholder="Enter a caption..." 
				onChange={event => setCaption(event.target.value)} 
				value={caption}
			/>
			<input name="pic" className="postUploader-file" type="file" onChange={handleChange}/>
			<Button className="postUploader-button" variant="outline-primary" onClick={onUpload}>Post</Button>
		</div>
	);
}

export default PostUploader;