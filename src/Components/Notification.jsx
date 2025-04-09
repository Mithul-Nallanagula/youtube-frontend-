import React, { useContext } from 'react'
import '../Css/Notification.css'
import { MyContext } from '../Context/MyProvider'

function Notification() {
    const { setshowNotification } = useContext(MyContext);
    return (
        <div className='notification'>
            <div className="top">
                <p>Notifications</p>
                <i className="ri-close-large-fill" onClick={() => setshowNotification(false)}></i>
            </div>
            <div className="bottom">
                <i className="ri-notification-2-line"></i>
                <h3>Your notifications live here</h3>
                <p>Subscribe to your favourite channels to receive notifications about their latest videos</p>
            </div>
        </div>
    )
}

export default Notification
