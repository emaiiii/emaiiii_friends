import React from 'react';
import './SignIn.css';

function SignIn() {
	return(
		<section className="login-block">
				<div className="login-container" id="login-container">
					<div className="form-container sign-in-container">
						<form action="#">
							<input type="email" placeholder="Email" />
							<input type="password" placeholder="Password" />

							<button className="signup-button ghost" id="signIn">Sign In</button>

							<hr className="h-line"/>
							<a href="signup" className="f-pass">Don't have an account?</a>
							<a href="#" className="f-pass">Forgot password?</a>
						</form>
					</div>
				</div>
		</section>
	);
}

export default SignIn;