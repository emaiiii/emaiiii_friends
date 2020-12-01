import React, {useState} from 'react';
import Navigation from '../../components/Navigation/Navigation';
import MainEmbed from '../../components/MainEmbed/MainEmbed';
import Post from '../../components/Post/Post';

import './Main.css';

function Main() {
	const [posts, setPosts] = useState([
		{
			username: "emaiiii",
			caption: "I love Apple and Google!!",
			imageUrl: "https://images.idgesg.net/images/article/2020/04/google-apple-contact-tracing-100838707-large.jpg"
		},		
		{
			username: "mkdoan",
			caption: "I love Apple and Google too!!",
			imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-Y7sqzilHz418I6RKtg-BNhp7aTz-_qIZ0qJebEMz5bqaFQcXZ4t3OiglkY0Cjfe251YxtgIBUgEeiScCcYaDA6Q-YDPiS0&usqp=CAU&ec=45732301"
		},		
		{
			username: "justluo",
			caption: "Me too!!",
			imageUrl: "https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg"
		},
		{
			username: "cindyphann",
			caption: "Me as well!",
			imageUrl: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg"
		},
	]);

	return(
		<div className="background">
			<Navigation/>
			
			<div className="mainpage-posts">
				<div className="mainpage-posts-left">
					{/*--loop through the posts array and create a post component for each object--*/}
					{
						posts.map(post => (
							<Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
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