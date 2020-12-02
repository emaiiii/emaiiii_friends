import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import {Modal} from 'react-bootstrap';

import './PostModal.css';

function PostModal(props){
	return(
		<Modal
          {...props}
          dialogClassName="Modal-width"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >            
            <Modal.Body className="Modal-padding">
                <div className="PostModal">
                	<div className="PostModal-container">
	                	{/*Post Image*/}
	                	<div className="PostModal-image-container">
	                    	<img className="PostModal-image" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"/>
	                	</div>

	                	{/*Post Info/Comment Section*/}
	                	<div className="PostModal-container">
	                		{/*owner of post*/}
	                		<Avatar
								className="PostModal-avatar"
								alt="emaiiii"
								src="/static/images/avatar/1.jpg"
							/>
							<h5 className="PostModal-text"><strong>emaiiii </strong>i love corgis!</h5>

	                	</div>
                	</div>
                </div>
            </Modal.Body>
       
        </Modal>
	); 
}

export default PostModal;