import React from 'react';
import {Link} from "react-router-dom";
import SignUp from '../SignUp/SignUp';
import './SignIn.css';

function SignIn() {
	const [modalShow, setModalShow] = React.useState(false);

	return(
		<section className="login-block">
				<div className="login-container" id="login-container">
					<div className="form-container sign-in-container">
						<form action="#">
							<input className="accountinfo" type="email" placeholder="Email" />
							<input className="accountinfo" type="password" placeholder="Password" />

							<Link to="/main" className="signin-button" id="signIn">Sign In</Link>
							<a href="fpass" className="f-pass">Forgot password?</a>

							<hr className="h-line"/>

							<Link className="signup-button" onClick={() => setModalShow(true)}>
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