import React from 'react';
import Avatar from "@material-ui/core/Avatar";

import './Profile.css';

function Profile() {
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
					<h4 className="profile-username">emaiiii</h4>
					<div className="profile-attr-container">
						<h6>100 posts</h6>
						<h6>1696 followers</h6>
						<h6>1 following</h6>
					</div>
					<h4 className="profile-name">Erik Mai</h4>
					<p>UCR 20' | CS </p>
				</div>
			</div>

			{/*Galler of all user's posts*/}	
			<div className="profile-gallery">
				<img className="gallery-item" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img className="gallery-item" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img className="gallery-item" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img className="gallery-item" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img className="gallery-item" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img className="gallery-item" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img className="gallery-item" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img className="gallery-item" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img className="gallery-item" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img className="gallery-item" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img className="gallery-item" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
				<img className="gallery-item" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
			</div>
		</div>
	);
}

export default Profile;