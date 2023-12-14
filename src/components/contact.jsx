import React from "react";

export const Contact = (props) => {
    return (
        <div>
            <div id="aboutUs">
                <div className="container">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="section-title">
                                <h2>{props.data ? props.data.aboutUsHeader : null}</h2>
                                <p>
                                    {props.data ? props.data.firstAboutUsParagraph : null}
                                </p>
                                <p>
                                    {props.data ? props.data.secondAboutUsParagraph : null}
                                </p>
                                <p><em>
                                    <sub>
                                        {props.data ? props.data.thirdAboutUsParagraph : null}
                                    </sub>
                                </em>
                                </p>
                            </div>
                            <form>
                                <button type="submit" formAction={props.data ? props.data.facebook : "/"}
                                        className="btn btn-custom btn-lg">
                                    {props.data ? props.data.findUs : null}
                                </button>
                            </form>
                        </div>
                    </div>
                    {<div className="col-md-3 col-md-offset-1 contact-info">
                        <h3>Contact Info</h3>
                        <div className="contact-item">
                            <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                                {
                                    <a href="mailto:ealingboardgames@gmail.com">{props.data ? props.data.email : "loading"}</a>
                                }
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                <span>
                  <i className="fa fa-calendar"></i> Events calendar
                </span>{" "}
                                {<iframe
                                    src="https://calendar.google.com/calendar/embed?height=400&wkst=2&bgcolor=%23ffd731&ctz=Europe%2FLondon&showTitle=0&showNav=1&mode=AGENDA&hl=en_GB&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=ZWFsaW5nYm9hcmRnYW1lc0BnbWFpbC5jb20&color=%23cca400"
                                    title="calendar"
                                    width="300" height="400" frameBorder="0" scrolling="no"></iframe>
                                }
                            </p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};
