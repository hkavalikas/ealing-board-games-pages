import React, { useEffect } from "react";
import introVideo from '../animation-loop.mp4';

export const Header = (props) => {
    useEffect(() => {
        const video = document.querySelector('.intro video');

        const loadVideo = () => {
            if (video) {
                video.src = introVideo;
            }
        };

        window.addEventListener('load', loadVideo);

        return () => {
            window.removeEventListener('load', loadVideo);
        };
    }, []);

    return (
        <header id="header">
            <div className="intro">
                <video className='intro' autoPlay loop muted>
                    {/* Remove the 'src' attribute from here */}
                </video>
            </div>
        </header>
    );
};
