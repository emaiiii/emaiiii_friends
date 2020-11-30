import React from 'react';
import {Navbar, Nav, FormControl, Button} from 'react-bootstrap';

import './Navigation.css';

function Navigation() {
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
		    	<Nav.Link href="/myacc">My Account</Nav.Link>													
		      	<Nav.Link href="/">Sign Out</Nav.Link>
		    </Nav>
		 </Navbar>
	);
}

export default Navigation;