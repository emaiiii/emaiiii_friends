import React from 'react';

import './Footer.css';

function Footer() {
	return(
		<div className="footer-container">
			<hr className="h-line-footer"/>
			
			<div className="content">	
				<h5>Sign in</h5>
			</div>

			<div className="content">
				<h5>Sign up</h5>
			</div>

			<div className="content">
				<h5>Help</h5>
			</div>

			<div className="content company-tag">		     
		        <h5>Friends©2020</h5> 
		    </div>
		</div>
	);
}

export default Footer;