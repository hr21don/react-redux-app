/*
* @Author: Helitha Rupasinghe;
* @Version: Version 1.0 - 09/02/2022
* License : MIT
*/
import React from 'react'
import './sidebarchannel.css'

import { setChannelInfo } from '../../features/appSlice'
import { useDispatch } from 'react-redux'

function SidebarChannel({ id, channelName }) {
    const dispatch = useDispatch()

    return (
        <div
            className="sidebarchannel"
            onClick={() => dispatch(
                setChannelInfo({
                    channelId: id,
                    channelName: channelName,
                })
            )}
        >
            <h4>
                <span className="sidebarchannel__hash" >#</span>
                {channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
