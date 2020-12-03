import React, {useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import SignUp from '../SignUp/SignUp';
import './SignIn.css';

function SignIn(props) {
	const [modalShow, setModalShow] = useState(false);
	const [signInEmail, setSignInEmail] = useState('');
	const [signInPass, setSignInPass] = useState(''); 
	const [redirect, setRedirect] = useState(false);

	function onEmailChange(event){
		setSignInEmail(event.target.value);
	}

	function onPassChange(event){
		setSignInPass(event.target.value);
	}

	function onSubmitSignIn(){
		//create state object for purpose of returning json object
		const state = {
			signInEmail: signInEmail,
			signInPass: signInPass,
		}
		console.log(state);

		fetch("http://localhost:3000/signin", {
			method: "post",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				email: state.signInEmail,
				password: state.signInPass,
			})
		})
			.then(response => response.json())
			.then(data => {
				if(data === "Success"){
					console.log("Gay");
					setRedirect(true);
				}
			})
	}

	function renderRedirect(){
		if(redirect){
			return <Redirect to="/main"/>
		}
	}

	return(
		<section className="login-block">
				<div className="login-container" id="login-container">
					<div className="form-container sign-in-container">
						<form action="#">
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

							<SignUp show={modalShow} onHide={() => setModalShow(false)}/>
						</form>
					</div>
				</div>
		</section>
	);
}

export default SignIn;