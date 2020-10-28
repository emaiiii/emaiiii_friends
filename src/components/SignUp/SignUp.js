import React from 'react';
import './SignUp.css';

function SignUp() {
return(
    <section className="registration">
            <div className="register-container" id="register-container">
                <div className="register-form sign-up-form">
                    <form action="#"><br/>
                        <h2 className="pv5">Friends</h2>
                        <h5>Sign up and keep up to date with all you friends</h5>
                            <hr className="h-line"/>

                            <input type="name" placeholder="First Name" />
                            <input type="name" placeholder="Last Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Confirm Password" />
                            <button className="register-button">Register</button>
                    </form>
                </div>
            </div>
    </section>
);
}
export default SignUp;