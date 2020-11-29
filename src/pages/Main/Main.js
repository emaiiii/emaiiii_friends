import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Post from '../../components/Post/Post';

import './Main.css';

function Main() {
	return(
		<div className="background">
			<Navigation/>
			<Post username="emaiiii" caption="I love Apple and Google!!" imageUrl="https://images.idgesg.net/images/article/2020/04/google-apple-contact-tracing-100838707-large.jpg"/>
			<Post username="mkdoan" caption="I love Apple and Google too!!" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-Y7sqzilHz418I6RKtg-BNhp7aTz-_qIZ0qJebEMz5bqaFQcXZ4t3OiglkY0Cjfe251YxtgIBUgEeiScCcYaDA6Q-YDPiS0&usqp=CAU&ec=45732301"/>
			<Post username="justluo" caption="Me too!!" imageUrl="https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg"/>
			<Post username="cindyphann" caption="Me as well!" imageUrl="https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg"/>
		</div>
	);
}

export default Main;