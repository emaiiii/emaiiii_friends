import React from 'react';
import Cookies from 'js-cookie';
import Avatar from "@material-ui/core/Avatar";
import PostModal from '../PostModal/PostModal';

import './Profile.css';

function Profile() {
	const [modalShow, setModalShow] = React.useState(false);
	
	const username = Cookies.get('username');
	const fname = Cookies.get('fname');
	const lname = Cookies.get('lname');
	const num_followers = Cookies.get('num_followers');
	const num_following = Cookies.get('num_following');

	return (
		<div className="profile">
			<div className="profile-container">
				{/*Profile picture*/}
				<div>
					<Avatar
						className="profile-avatar"
						alt="emaiiii"
						src="/static/images/avatar/1.jpg"
					/>
				</div>

				{/*Account details*/}
				<div className="profile-right">
					<h4 className="profile-username">{username}</h4>
					<div className="profile-attr-container">
						<h6>100 posts</h6>
						<h6>{num_followers} followers</h6>
						<h6>{num_following} following</h6>
					</div>
					<h4 className="profile-name">{fname} {lname}</h4>
					<p>UCR 20' | CS </p>

					<PostModal show={modalShow} onHide={() => setModalShow(false)}/>
				</div>
			</div>

			{/*Galler of all user's posts*/}	
			<div className="profile-gallery">
				<img alt="1" className="gallery-item" onClick={() => setModalShow(true)} src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img alt="2" className="gallery-item" onClick={() => setModalShow(true)} src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img alt="3" className="gallery-item" onClick={() => setModalShow(true)} src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img alt="4" className="gallery-item" onClick={() => setModalShow(true)} src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img alt="5" className="gallery-item" onClick={() => setModalShow(true)} src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img alt="6" className="gallery-item" onClick={() => setModalShow(true)} src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img alt="7" className="gallery-item" onClick={() => setModalShow(true)} src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img alt="8" className="gallery-item" onClick={() => setModalShow(true)} src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img alt="9" className="gallery-item" onClick={() => setModalShow(true)} src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img alt="10" className="gallery-item" onClick={() => setModalShow(true)} src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img alt="11"className="gallery-item" onClick={() => setModalShow(true)} src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img alt="12" className="gallery-item" onClick={() => setModalShow(true)} src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
			</div>
		</div>
	);
}

export default Profile;