import React from 'react';
import SignUp from '../SignUp/SignUp';
import './SignIn.css';

class SignIn extends React.Component {

	constructor(){
		super();
		this.state = {
			showSignUp: false,
		};

		this.onSignUpClick = this.onSignUpClick.bind(this);
	}

	onSignUpClick = () => {
		console.log("Success: sign up display overlay on");

		this.setState({
			showSignUp: true,
		});
	}

	render(){

		return(
			<section className="login-block">
					<div className="login-container" id="login-container">
						<div className="form-container sign-in-container">
							<form action="#">
								<input type="email" placeholder="Email" />
								<input type="password" placeholder="Password" />

								<button className="signup-button ghost" id="signIn">Sign In</button>

								<hr className="h-line"/>

								<button onClick={this.onSignUpClick}>Don't have an account?</button>
								{this.state.showSignUp ? <SignUp className="overlay"/> : null}

								<a href="#" className="f-pass">Forgot password?</a>
							</form>
						</div>
					</div>
			</section>
		);
	}
}

export default SignIn;