import React from 'react';
import './RightSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalendar } from '@fortawesome/free-solid-svg-icons';

const RightSection = () => {
    return (
        <div className="right-section">
            <h2>Contact Info</h2>
            <div className="contact-info">
                <div className="email-section">

                    <span>   <FontAwesomeIcon icon={faEnvelope}/> Email</span>
                    <a href="mailto:ealingboardgames@gmail.com">ealingboardgames@gmail.com</a>
                </div>

                <div className="calendar-section">
                    <span> <FontAwesomeIcon icon={faCalendar} /> Events calendar</span>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=400&wkst=2&ctz=Europe%2FLondon&showTitle=0&showNav=0&mode=AGENDA&hl=en_GB&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=ZWFsaW5nYm9hcmRnYW1lc0BnbWFpbC5jb20&color=%23cca400"
                        title="calendar"
                        width="300" height="400"
                        frameBorder="0"
                        scrolling="no"
                    >
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default RightSection;
