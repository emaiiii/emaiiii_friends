import React from 'react';
import Avatar from "@material-ui/core/Avatar";

import './Post.css';

function Post({username, caption, imageUrl}){
	return(
		<div className="post">
			{/*header -- avatar + username*/}
			<div className="post-header">
				<Avatar
					className="post-avatar"
					alt="emaiiii"
					src="/static/images/avatar/1.jpg"
				/>
				<h3>{username}</h3>
			</div>
			
			{/*image*/}
			<img className="post-image" src={imageUrl}/>
			
			{/*username + caption*/}
			<h4 className="post-text"><strong>{username}: </strong>{caption}</h4>
		</div>
	);
}

export default Post;