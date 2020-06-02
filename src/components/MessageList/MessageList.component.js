import React from "react";

import SendMessageForm from "../SendMessageForm/SendMessageForm.component";

import './MessageList.styles.css';

const DUMMY_DATA = [
    {
        senderId: 'perborgen',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'janedoe',
        text: 'Great! How about you?'
    },
    {
        senderId: 'perborgen',
        text: 'Good to hear! I am great as well'
    }
];

class MessageList extends React.Component {

    messageSummary = Object.keys(DUMMY_DATA).map(key => {
        return (
            <div key={key} className="incoming_msg">
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <p>{DUMMY_DATA[key].text}</p>
                        <span className="user">{DUMMY_DATA[key].senderId}</span></div>
                </div>
            </div>
        );
    });

    render() {
        return (
            <div>
                <div className="msg_history">
                    {this.messageSummary}
                    <div className="outgoing_msg">
                        <div className="sent_msg">
                            <p>Test which is a new approach to have all
                                solutions</p>
                            <span className="user"> Me</span></div>
                    </div>
                </div>
                <hr className="mt-3 mb-2"/>
                <SendMessageForm/>
            </div>
        )
    }
}


export default MessageList;