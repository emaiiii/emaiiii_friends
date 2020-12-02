import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import {Modal} from 'react-bootstrap';

import './PostModal.css';

function PostModal(props){
	return(
		<Modal
          {...props}
          dialogClassName="modal-width"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >            
            <Modal.Body className="modal-padding">
                <div className="postModal">
                	<div className="postModal-container">
	                	{/*Post Image*/}
	                	<div className="postModal-image-container">
	                    	<img className="postModal-image" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
	                	</div>

	                	{/*Post Info/Comment Section*/}
	                	<div className="postModal-container">
	                		{/*owner of post*/}
	                		<Avatar
								className="postModal-avatar"
								alt="emaiiii"
								src="/static/images/avatar/1.jpg"
							/>
							<h5 className="postModal-text"><strong>emaiiii </strong>i love corgis!</h5>

	                	</div>
                	</div>
                </div>
            </Modal.Body>
       
        </Modal>
	); 
}

export default PostModal;