//<Button className="searchButton" variant="primary">Search</Button>

import React, {userEffect, useState} from 'react';
import Cookies from 'js-cookie';
import Avatar from "@material-ui/core/Avatar";
import {Navbar, Nav, FormControl, ButtonGroup, DropdownButton, Dropdown, Modal, Button} from 'react-bootstrap';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import './Navigation.css';

function Navigation() {
	const username = Cookies.get('username');
	// const uid = Cookies.get('id');

	const [searchType, setSearchType] = useState('');
    const [searchParameter, setSearchParameter] = useState('');
    const [modalShow, setModalShow] = useState(false);

	function onSearchChange(event){
		setSearchParameter(event.target.value);
	}

	function onUserTag(){
		setSearchType("tags");
		onSubmitUser();
	}

	function onUserLike(){
		setSearchType("likes");
		onSubmitUser();
	}

	function onUserDislike(){
		setSearchType("dislikes");
		onSubmitUser();
	}

	function onUserDate(){
		setSearchType("date");
		onSubmitUser();
	}

	function onUserUser(){
		setSearchType("user");
		onSubmitUser();
	}

	function onPostTag(){
		setSearchType("tags");
		onSubmitPost();
	}

	function onPostLike(){
		setSearchType("likes");
		onSubmitPost();
	}

	function onPostDislike(){
		setSearchType("dislikes");
		onSubmitPost();
	}

	function onPostDate(){
		setSearchType("date");
		onSubmitPost();
	}

	function onPostUser(){
		setSearchType("user");
		onSubmitPost();
	}

	function searchUserModal(props) {
	  return (
	    <Modal
	      {...props}
	      size="lg"
	      aria-labelledby="contained-modal-title-vcenter"
	      centered
	    >
	      <Modal.Header closeButton>
	        <Modal.Title id="contained-modal-title-vcenter">
	          Modal heading
	        </Modal.Title>
	      </Modal.Header>
	      <Modal.Body>
	        <h4>Centered Modal</h4>
	        <p>
	          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
	          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
	          consectetur ac, vestibulum at eros.
	        </p>
	      </Modal.Body>
	      <Modal.Footer>
	        <Button onClick={props.onHide}>Close</Button>
	      </Modal.Footer>
	    </Modal>
	  );
	}

	function onSubmitUser(){
		const state = {
			searchType: searchType,
			searchParameter: searchParameter
		}

		fetch("http://localhost:3000/searchUser", {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    searchType: state.searchType,
                    searchParameter: state.searchParameter,
                })
            })
                .then(response => response.json())
                .then(user => {
                    if(user){
                    	setModalShow(true);
                    	console.log(user);
                    }
                })
                .catch(console.log)
	}

	function onSubmitPost(){
		const state = {
			searchType: searchType,
			searchParameter: searchParameter
		}
		fetch("http://localhost:3000/searchPost", {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    searchType: state.searchType,
                    searchParameter: state.searchParameter,
                })
            })
                .then(response => response.json())
                .then(post => {
                    if(post){
                        console.log(post);
                    }
                })
                .catch(console.log)
	}


	return(
		<Navbar className="sticky" sticky="top" bg="light" variant="light">
		    <Navbar.Brand href="/main" className="main-title"><strong>Friends</strong></Navbar.Brand>

		    {/*SEARCH BOX*/}
		    <div className="navigation_search mr6">
		    	<div className="searchbar_sizing">
					<FormControl type="text" placeholder="Search" onChange={onSearchChange}/>
				</div>
				<ButtonGroup>
					<DropdownButton as={ButtonGroup} title="Search User" id="bg-nested-dropdown">
					    <Dropdown.Item eventKey="1" onClick={onUserTag}>By Tag</Dropdown.Item>
					    <Dropdown.Item eventKey="2" onClick={onUserLike}>Most Likes</Dropdown.Item>
					    <Dropdown.Item eventKey="3" onClick={onUserDislike}>Most Dislikes</Dropdown.Item>
					    <Dropdown.Item eventKey="4" onClick={onUserDate}>On Date</Dropdown.Item>
					    <Dropdown.Item eventKey="5" onClick={onUserUser}>Username</Dropdown.Item>
					</DropdownButton>
					<DropdownButton as={ButtonGroup} title="Search Post" id="bg-nested-dropdown">
					    <Dropdown.Item eventKey="1" onClick={onPostTag}>By Tag</Dropdown.Item>
					    <Dropdown.Item eventKey="2" onClick={onPostLike}>Most Likes</Dropdown.Item>
					    <Dropdown.Item eventKey="3" onClick={onPostDislike}>Most Dislikes</Dropdown.Item>
					    <Dropdown.Item eventKey="4" onClick={onPostDate}>On Date</Dropdown.Item>
					    <Dropdown.Item eventKey="5" onClick={onPostUser}>From User</Dropdown.Item>
					</DropdownButton>
				</ButtonGroup>
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