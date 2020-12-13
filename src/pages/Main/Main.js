import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import MainEmbed from '../../components/MainEmbed/MainEmbed';
import Post from '../../components/Post/Post';
import PostUploader from '../../components/PostUploader/PostUploader';

import './Main.css';

function Main({posts, comments}) {	
	
	function getComments(photo_id, comments){
		let postComments = [];	

		
		comments.forEach(comment => {
			if(comment.photo_id === photo_id){
				postComments.push({
					username: comment.username,
					comment: comment.comment
				})
			}
		})

		//console.log(comments);
		return postComments;
	}

	return(
		<div className="background">
			<Navigation/>
			
			<div className="mainpage-posts">
				<div className="mainpage-postUploader">
					<PostUploader/>
				</div>

				<div className="mainpage-posts-left">
					{/*--loop through the posts array and create a post component for each object--*/}
					{
						posts.map((post, key) => (
							<Post 
								key={key} 
								photo_id={post.photo_id}
								username={post.username} 
								caption={post.title} 
								imageUrl={post.imageUrl}
								comments={getComments(post.photo_id, comments)}
							/>
						))
					}
				</div>
				<div className="mainpage-posts-right">
					<MainEmbed/>
				</div>
			</div>
		</div>
	);
}

export default Main;