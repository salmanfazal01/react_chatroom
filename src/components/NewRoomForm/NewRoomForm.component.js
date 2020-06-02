import React from "react";
import {MDBBtn, MDBInputGroup} from "mdbreact";

class NewRoomForm extends React.Component {
    render() {
        return (
            <div>
                <MDBInputGroup
                    material
                    containerClassName="my-0 pt-3 pb-2"
                    hint="Add Room"
                    append={
                        <button className="btn btn-md btn-outline-default m-0 px-3 py-2 z-depth-0 waves-effect"
                                type="button">+</button>
                    }
                />
            </div>
        )
    }
}


export default NewRoomForm;