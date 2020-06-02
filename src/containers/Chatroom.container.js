import React from "react";

import './Chatroom.container.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import RoomList from "../components/RoomList/RoomList.component";
import MessageList from "../components/MessageList/MessageList.component";
import SendMessageForm from "../components/SendMessageForm/SendMessageForm.component";
import NewRoomForm from "../components/NewRoomForm/NewRoomForm.component";

class Chatroom extends React.Component {
    render() {
        return (
            <div>
                <h2 className="text-center p-2">Chatroom app - Salman Fazal</h2>

                <MDBContainer className="Chatroom-container">
                    <MDBRow>
                        <MDBCol md="4" className="RoomList-container p-0">
                            <RoomList />
                        </MDBCol>
                        <MDBCol md="8" className="MessageList-container">
                            <MessageList />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>

        )
    }
}


export default Chatroom;