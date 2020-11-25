import React from 'react';
import {Modal} from 'react-bootstrap';
import './SignUp.css';

function SignUp(props) {
    return(
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Modal.Header closeButton></Modal.Header>
            
            <Modal.Body>
                <div className="register-form sign-up-form">
                    <form action="#"><br/>
                        <h2 className="font-header">Friends</h2>
                        <h5 className="font-body">Sign up and keep up to date with all you friends</h5>
                            <hr className="h-line"/>

                            <input className="field" type="name" placeholder="First Name"/>
                            <input className="field" type="name" placeholder="Last Name"/>
                            <input className="field" type="email" placeholder="Email"/>
                            <input className="field" type="password" placeholder="Password"/>
                            <input className="field" type="password" placeholder="Confirm Password"/>
                            <button className="register-button">Register</button>
                    </form>
                </div>
            </Modal.Body>
       
        </Modal>
    );
}
export default SignUp;



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