import React, {useState} from 'react';
import Cookies from 'js-cookie';
import {Link, Redirect} from "react-router-dom";
import SignUp from '../SignUp/SignUp';
import './SignIn.css';

function SignIn(props) {
	// state management
	const [modalShow, setModalShow] = useState(false);
	const [signInEmail, setSignInEmail] = useState('');
	const [signInPass, setSignInPass] = useState(''); 
	const [redirect, setRedirect] = useState(false);

	// listen for event of email input
	function onEmailChange(event){
		setSignInEmail(event.target.value);
	}

	// listen for event of password input
	function onPassChange(event){
		setSignInPass(event.target.value);
	}

	// send log in request for either a pass/fail
	function onSubmitSignIn(event){
		// create state object for purpose of returning json object
		const state = {
			signInEmail: signInEmail,
			signInPass: signInPass,
		}
		console.log(state);

		// send sign in request to the server
		fetch("http://localhost:3000/signin", {
			method: "post",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				email: state.signInEmail,
				password: state.signInPass,
			})
		})
			.then(response => response.json())
			.then(user => {
				// if a user id is returned then successful log in	
				if(user.id){
					setRedirect(true);
					Cookies.set('userId', user.id);
					console.log(Cookies.get('userId'));
				}
			})
			.catch(console.log)

		// prevent input fields from clearing on button click 
		// if unsuccessful login attempt
		event.preventDefault();
	}

	// if true redirect to the main feed page
	function renderRedirect(){
		if(redirect){
			return <Redirect to="/main"/>
		}
	}

	return(
		<section className="login-block">
				<div className="login-container" id="login-container">
					<div className="form-container sign-in-container">
						<form action="#" id="signinform">
							<input 
								className="accountinfo" 
								type="email" 
								placeholder="Email" 
								onChange={onEmailChange}
							/>
							<input 
								className="accountinfo" 
								type="password" 
								placeholder="Password" 
								onChange={onPassChange}
							/>

							<button
								className="signin-button" 
								id="signIn"
								onClick={onSubmitSignIn}
								>Sign In
							</button>

							{/*redirect to main feed if login is successful*/}
							{renderRedirect()}

							<a href="fpass" className="f-pass">Forgot password?</a>

							<hr className="h-line"/>

							<Link to="/"className="signup-button" onClick={() => setModalShow(true)}>
								Create an Account
							</Link>

							<SignUp show={modalShow} setModalShow={setModalShow} onHide={() => setModalShow(false)}/>
						</form>
					</div>
				</div>
		</section>
	);
}

export default SignIn;