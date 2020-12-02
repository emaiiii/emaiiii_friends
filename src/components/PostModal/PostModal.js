import React, {useState} from 'react';
import Avatar from "@material-ui/core/Avatar";
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

import './PostModal.css';

function PostModal(props){

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
		<Modal
          {...props}
          dialogClassName="modal-width"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >            
            <Modal.Body className="modal-padding">
                <div className="postModal">
                	<div className="postModal-container">
	                	{/*Post Image*/}
	                	<div className="postModal-image-container">
	                    	<img className="postModal-image" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
	                	</div>

	                	{/*Post Info-Comment Section*/}
	                	{/*owner of post*/}
	                	<div className="postModal-right">
		                	<div className="postModal-container-owner">
		                		<Avatar
									className="postModal-avatar"
									alt="emaiiii"
									src="/static/images/avatar/1.jpg"
								/>
								<h5 className="postModal-text"><strong>emaiiii </strong>i love corgis!</h5>
		                	</div>

							<div className="postModal-comments">
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
							<div className="postModal-commentline-container">
								<form className="postModal-commentline">
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
		                </div>
                	</div>

                </div>
            </Modal.Body>
       
        </Modal>
	); 
}

export default PostModal;