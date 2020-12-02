import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Profile from '../../components/Profile/Profile';

function MyProfile() {
	return(
		<div className="background">
			<Navigation/>
			<Profile/>
		</div>
	);
}

export default MyProfile;