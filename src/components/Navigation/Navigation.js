import React from 'react';
import Cookies from 'js-cookie';
import Avatar from "@material-ui/core/Avatar";
import {Navbar, Nav, FormControl, Button} from 'react-bootstrap';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import './Navigation.css';

function Navigation() {
	const username = Cookies.get('username');

	return(
		<Navbar className="sticky" sticky="top" bg="light" variant="light">
		    <Navbar.Brand href="/main" className="main-title"><strong>Friends</strong></Navbar.Brand>

		    {/*SEARCH BOX*/}
		    <div className="navigation_search mr6">
		    	<div className="searchbar_sizing">
					<FormControl type="text" placeholder="Search"/>
				</div>
				<Button className="searchButton" variant="primary">Search</Button>
		    </div>

		    {/*LINKS*/}
		    <Nav className="mr-auto">
		    	<Nav.Link href="/myprofile" title="My Profile">
			    	<div className="nav-profile">
						<Avatar
							className="nav-profile-avatar"
							alt="emaiiii"
							src="/static/images/avatar/1.jpg"
						/>
						<h6 className="nav-profile-user">{username}</h6>
					</div>
				</Nav.Link>
		    	<Nav.Link href="/main" title="Home"><HomeOutlinedIcon/></Nav.Link>												
		      	<Nav.Link href="/" title="Sign Out"><ExitToAppOutlinedIcon/></Nav.Link>
		    </Nav>
		 </Navbar>
	);
}

export default Navigation;