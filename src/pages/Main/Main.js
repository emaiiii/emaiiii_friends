import React, {useState, useEffect} from 'react';
import Navigation from '../../components/Navigation/Navigation';
import MainEmbed from '../../components/MainEmbed/MainEmbed';
import Post from '../../components/Post/Post';
import PostUploader from '../../components/PostUploader/PostUploader';

import './Main.css';

function Main({posts}) {
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
							<Post key={key} username={post.username} caption={post.title} imageUrl={post.imageUrl}/>
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