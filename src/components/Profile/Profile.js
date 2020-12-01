import React from 'react';
import Avatar from "@material-ui/core/Avatar";

import './Profile.css';

function Profile() {
	return (
		<div className="profile">
			<div className="profile-container">
				<div>
					<Avatar
						className="profile-avatar"
						alt="emaiiii"
						src="/static/images/avatar/1.jpg"
					/>
				</div>
				<div>
					<h4>Erik Mai</h4>
					<div className="profile-attr-container">
						<h6>100 posts</h6>
						<h6>1696 followers</h6>
						<h6>1 following</h6>
					</div>
				</div>
			</div>	
			<div className="profile-gallery">
			</div>
		</div>
	);
}

export default Profile;