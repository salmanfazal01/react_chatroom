import React from "react";

import './RoomList.styles.css';
import NewRoomForm from "../NewRoomForm/NewRoomForm.component";

class RoomList extends React.Component {
    render() {
        return (
            <div className="inbox_people">
                <div className="inbox_chat">
                    <div className="chat_list active_chat">
                        <div className="chat_people">
                            <div className="chat_img">
                                <img src="https://ptetutorials.com/images/user-profile.png" alt="Salman"/>
                            </div>
                            <div className="chat_ib">
                                <h5># Chatroom 1</h5>
                                <p>Chatroom Description</p>
                            </div>
                        </div>
                    </div>
                </div>

                <NewRoomForm/>
            </div>
        )
    }
}


export default RoomList;