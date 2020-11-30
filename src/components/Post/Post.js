import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

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
				<h6>{username}</h6>
			</div>
			
			{/*image*/}
			<img className="post-image" src={imageUrl}/>
			
			{/*icon button row*/}
			<div className="post-iconrow">
				<IconButton className="icon-button">
					<FavoriteBorderOutlinedIcon/>
				</IconButton>

				<IconButton className="icon-button">
					<ChatBubbleOutlineOutlinedIcon/>
				</IconButton>

				<IconButton className="icon-button">
					<BookmarkBorderOutlinedIcon/>
				</IconButton>
			</div>
			
			<hr className="post-hline"/>

			{/*username + caption*/}
			<h5 className="post-text"><strong>{username}: </strong>{caption}</h5>
		</div>
	);
}

export default Post;