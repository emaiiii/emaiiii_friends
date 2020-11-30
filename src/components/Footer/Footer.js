import React from 'react';

import './Footer.css';

function Footer() {
	return(
		<div className="footer-container">
			<hr className="h-line-footer"/>
			
			<div className="content">	
				<h6>Sign in</h6>
			</div>

			<div className="content">
				<h6>Sign up</h6>
			</div>

			<div className="content">
				<h6>Help</h6>
			</div>

			<div className="content company-tag">		     
		        <h6>Friends©2020</h6> 
		    </div>
		</div>
	);
}

export default Footer;