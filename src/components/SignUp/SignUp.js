import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import './SignUp.css';

function SignUp(props) {
    // state management
    const [fName, setRegFName] = useState('');
    const [lName, setRegLName] = useState('');
    const [email, setRegEmail] = useState(''); 
    const [password, setRegPass] = useState('');
    const [confPassword, setRegConfPass] = useState('');

    // listen for event of email input
    function onFNameChange(event){
        setRegFName(event.target.value);
    }

    // listen for event of password input
    function onLNameChange(event){
        setRegLName(event.target.value);
    }

    // listen for event of email input
    function onEmailChange(event){
        setRegEmail(event.target.value);
    }

    // listen for event of password input
    function onPassChange(event){
        setRegPass(event.target.value);
    }


    // listen for event of password input
    function onConfPassChange(event){
        setRegConfPass(event.target.value);
    }

    // send register request for either a pass/fail
    function onSubmitSignUp(){
        // create state object for purpose of returning json object
        const state = {
            fName: fName,
            lName: lName,
            email: email,
            password: password,
        }
        console.log(state);

        if(confPassword === password){
            // send sign in request to the server
            fetch("http://localhost:3000/register", {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    fName: state.fName,
                    lName: state.lName,
                    email: state.email,
                    password: state.password,
                })
            })
                .then(response => response.json())
                .then(user => {
                    if(user){
                            console.log(user);
                    }
                })
                .catch(console.log)
        }
        else{
            console.log("Error: passwords do not match");
        }
    }
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

                            <input 
                                className="field" 
                                type="name" 
                                placeholder="First Name"
                                onChange={onFNameChange}
                            />
                            <input 
                                className="field" 
                                type="name" 
                                placeholder="Last Name"
                                onChange={onLNameChange}
                            />
                            <input 
                                className="field" 
                                type="email" 
                                placeholder="Email"
                                onChange={onEmailChange}
                            />
                            <input 
                                className="field" 
                                type="password" 
                                placeholder="Password"
                                onChange={onPassChange}
                            />
                            <input 
                                className="field" 
                                type="password" 
                                placeholder="Confirm Password"
                                onChange={onConfPassChange}
                            />
                            <button 
                                className="register-button"
                                onClick={onSubmitSignUp}
                                >Register
                            </button>
                    </form>
                </div>
            </Modal.Body>
       
        </Modal>
    );
}
export default SignUp;