import React, {useState, useEffect} from 'react';
import Avatar from "@material-ui/core/Avatar";
import {Button} from 'react-bootstrap';
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

import './Post.css';

function Post({username, caption, imageUrl}){

	const [comments, setComments] = useState([
		{
			username: "rando1",
			text: "wow your post is so cool"
		},		
		{
			username: "rando2",
			text: "amazing post"
		},		
		{
			username: "rando3",
			text: "i want to be just like you"
		},
		{
			username: "rando4",
			text: "add me on league!"
		},
	]);
	
	const [comment, setComment] = useState('');

	const postComment = () => (event) => {

	}

	return(
		<div className="post">
			{/*header -- avatar + username*/}
			<div className="post-header">
				<Avatar
					className="post-avatar"
					alt={username}
					src="/static/images/avatar/1.jpg"
				/>
				<h6 className="avuse-name">{username}</h6>
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

			{/*username + caption*/}
			<h5 className="post-text"><strong>{username} </strong>{caption}</h5>


			<div className="post-comments">
				{/*--loop through the posts array and create a post component for each object--*/}
				{
					comments.map((comment) => (
						<p>
							<strong>{comment.username}</strong> {comment.text}
						</p>
					))
				}
			</div>


			{/*comment text field*/}
			<hr className="post-hline"/>
			<form className="post-commentline">
				<input 
					className="post-textfield" 
					type="text" 
					value={comment}
					placeholder="Add a comment..."
					onChange={(e) => setComment(e.target.value)}
				/>
				<Button 
					className="post-postButton"
					disabled={!comment}
					type="submit" 
					variant="link"
					onClick={postComment}
				>Post</Button>
			</form>
		</div>
	);
}

export default Post;