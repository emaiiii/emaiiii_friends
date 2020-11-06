import React from 'react';

import './Footer.css';

function Footer() {
	return(
		<div className="footer-container">
			<hr className="h-line-footer"/>
			
			<div className="content">	
				<h4>Sign in</h4>
			</div>

			<div className="content">
				<h4>Sign up</h4>
			</div>

			<div className="content">
				<h4>Help</h4>
			</div>

			<div className="content">		     
		        <h3>Friends©2020</h3> 
		    </div>
		</div>
	);
}

export default Footer;