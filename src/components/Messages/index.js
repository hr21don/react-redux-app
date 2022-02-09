/*
* @Author: Helitha Rupasinghe;
* @Version: Version 1.0 - 09/02/2022
* License : MIT
*/
import React from 'react'
import './messages.css'

import { Avatar } from '@material-ui/core'

function Messages({ timestamp, message, user }) {
    return (
        <div className="messages" >
            <Avatar
                src={user.photo}
                alt={user.displayName}
            />
            <div className="messages__info">
                <h4>
                    {user.displayName}
                    <span className="messages__timestamp">
                    {new Date().toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Messages
