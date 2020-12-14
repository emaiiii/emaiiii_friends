import React, {useState} from 'react';
import Cookies from 'js-cookie';
import Avatar from "@material-ui/core/Avatar";
import {Button} from 'react-bootstrap';
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

import './Post.css';

function Post({photo_id, user_id, username, caption, imageUrl, comments}){

	const [comment, setComment] = useState('');
	const curr_user_id = parseInt(Cookies.get('userId'));

	// listen for event of email input
	function onCommentChange(event){
		setComment(event.target.value);
	}

	function onComment(event){
		const state = {
			photo_id: photo_id,
			user_id: curr_user_id,
			comment: comment,
		}
		console.log(state);
		fetch("http://localhost:3000/comment", {
			method: "post",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				photo_id: state.photo_id,
				user_id: state.user_id,
				comment: state.comment
			})
		})
			.then(response => response.json())
			.then(comment => console.log)
			.catch(console.log)

		event.preventDefault();
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
			<img alt="avatar1" className="post-image" src={imageUrl}/>
			
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
					comments.map((comment, key) => (
						<p key={key}>
							<strong>{comment.username}</strong> {comment.comment}
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
					onChange={onCommentChange}
				/>
				<Button 
					className="post-postButton"
					disabled={!comment}
					type="submit" 
					variant="link"
					onClick={onComment}
				>Post</Button>
			</form>
		</div>
	);
}

export default Post;