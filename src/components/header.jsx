import React from "react";
import introVideo from '../animation-loop.mp4';

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
      <video className='intro' autoPlay loop muted>
        <source src={introVideo} type='video/mp4' />
      </video>
        {/* <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="https://www.facebook.com/groups/ealingboardgames"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Facebook group
                </a>{" "}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
};
