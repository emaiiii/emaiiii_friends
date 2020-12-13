import React from 'react';
import Cookies from 'js-cookie';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";

import './MainEmbed.css';

function MainEmbed(){
	const username = Cookies.get('username');
	console.log(username);

	return(
		<div className="mainEmbed">
			{/*Profile of current user*/}
			<div className="mainEmbed-profile">
				<Avatar
					className="post-avatar"
					alt="emaiiii"
					src="/static/images/avatar/1.jpg"
				/>
				<h6 className="avuse-name">{username}</h6>
			</div>

			{/*Suggested people to follow*/}
			<div className="mainEmbed-sugg">
				<h5 className="mainEmbed-sugg-title">Suggestions For You</h5>
				<Link to="/viewtofollow" className="mainEmbed-link">
					View All
				</Link>
			</div>

			{/*Display suggested people to follow -- only 5 accounts at a time*/}
			<div className="mainEmbed-suggestedfollows">
				<div className="mainEmbed-profile">
					<Avatar
						className="post-avatar"
						alt="mkdoan"
						src="/static/images/avatar/1.jpg"
					/>
					<h6 className="avuse-name">mkdoan</h6>

					<Button variant="link" className="mainEmbed-Button">Follow</Button>
				</div>

				<div className="mainEmbed-profile">
					<Avatar
						className="post-avatar"
						alt="jluo"
						src="/static/images/avatar/1.jpg"
					/>
					<h6 className="avuse-name">jluo</h6>

					<Button variant="link" className="mainEmbed-Button">Follow</Button>
				</div>

				<div className="mainEmbed-profile">
					<Avatar
						className="post-avatar"
						alt="thomasbomas"
						src="/static/images/avatar/1.jpg"
					/>
					<h6 className="avuse-name">thomasbomas</h6>

					<Button variant="link" className="mainEmbed-Button">Follow</Button>
				</div>

				<div className="mainEmbed-profile">
					<Avatar
						className="post-avatar"
						alt="rickydicky"
						src="/static/images/avatar/1.jpg"
					/>
					<h6 className="avuse-name">rickydicky</h6>

					<Button variant="link" className="mainEmbed-Button">Follow</Button>
				</div>

				<div className="mainEmbed-profile">
					<Avatar
						className="post-avatar"
						alt="pewdiepie"
						src="/static/images/avatar/1.jpg"
					/>
					<h6 className="avuse-name">pewdiepie</h6>

					<Button variant="link" className="mainEmbed-Button">Follow</Button>
				</div>
			</div>

			{/*Embed footer*/}
			<div className="mainEmbed-footer">
				<p className="mainEmbed-footer-content">About · Help · Privacy · Terms · Locations · HashTags · Language</p>
				<p className="mainEmbed-footer-content">©2020 Friends</p>
			</div>
		</div>
	);
}

export default MainEmbed;