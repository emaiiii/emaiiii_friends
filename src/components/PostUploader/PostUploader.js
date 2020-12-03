import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

import './PostUploader.css';

function PostUploader(){
	const [setImage] = useState(null);
	const [progress] = useState(0);
	const [caption, setCaption] = useState('');

	const handleChange = (e) => {
		if(e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	const handleUpload = () => {

	}

	return(
		<div className="postUploader">
			<progress className="postUploader-progress" value={progress} max="100"/>
			<input type="text" 
				className="postUploader-caption"
				placeholder="Enter a caption..." 
				onChange={event => setCaption(event.target.value)} 
				value={caption}
			/>
			<input className="postUploader-file" type="file" onChange={handleChange}/>
			<Button className="postUploader-button" variant="outline-primary" onClick={handleUpload}>Post</Button>
		</div>
	);
}

export default PostUploader;