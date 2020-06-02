import React from "react";

import './SendMessageForm.styles.css';
import {MDBBtn, MDBInputGroup} from "mdbreact";

class SendMessageForm extends React.Component {
    render() {
        return (
            <div>
                <MDBInputGroup
                    material
                    containerClassName="my-0 py-1 mb-2"
                    hint="Message"
                    append={
                        <MDBBtn color="secondary" className="m-0 px-3 py-2 z-depth-0">
                            Send
                        </MDBBtn>
                    }
                />
            </div>
        )
    }
}


export default SendMessageForm;