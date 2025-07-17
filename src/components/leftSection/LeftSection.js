import React from 'react';
import './LeftSection.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

const LeftSection = () => {
    return (
        <div className="left-section">
            <video 
                className="background-video" 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="metadata"
                aria-label="Board game animation"
            >
                <source src="/resources/video/animation-loop.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <h1>ABOUT US</h1>
            <p>
                We are a community of beginners and veterans alike; a bunch of people
                that just like to sit around and play board games. If you are interested
                in board games, whether it be learning or playing, we have a seat for you.
                Come say hello!
            </p>
            <p>
                We meet weekly at Ealing Broadway, most events are free to attend but please
                refer to the events calendar for the specifics. Please arrive between
                18:20-19:00, any later and it becomes harder to jump into a game, there's
                no need to book, just turn up!
            </p>
            <p className="disclaimer">
                The club and its events are first and foremost aimed at adults. Children
                are welcome as long as they are supervised at all times by a parent or carer.
                The organisers take no responsibility or liability for unsupervised children.
                Please note that there could be games present that may not be suitable for children.
            </p>
            <a 
                className="join-button" 
                href="https://www.facebook.com/groups/ealingboardgames" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join Ealing Board Games Club on Facebook"
            >
                <FontAwesomeIcon icon={faFacebook} aria-hidden="true" /> Find us on Facebook
            </a>
        </div>
    );
};

export default LeftSection;
