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
                    <span><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> Email</span>
                    <a 
                        href="mailto:ealingboardgames@gmail.com"
                        aria-label="Email Ealing Board Games Club"
                    >
                        ealingboardgames@gmail.com
                    </a>
                </div>

                <div className="calendar-section">
                    <span><FontAwesomeIcon icon={faCalendar} aria-hidden="true" /> Events calendar</span>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=400&wkst=2&ctz=Europe%2FLondon&showTitle=0&showNav=0&mode=AGENDA&hl=en_GB&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=ZWFsaW5nYm9hcmRnYW1lc0BnbWFpbC5jb20&color=%23cca400"
                        title="Ealing Board Games Club Events Calendar"
                        className="calendar-iframe"
                        style={{ border: 'none' }}
                        scrolling="no"
                        aria-label="Ealing Board Games Club Events Calendar"
                        allow="fullscreen"
                        loading="lazy"
                    >
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default RightSection;
