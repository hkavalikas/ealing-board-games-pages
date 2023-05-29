import { useState } from "react";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };
  return (
    <div>
      <div id="aboutUs">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>About us</h2>
                <p>
                We are a community of beginners and veterans alike; a bunch of people that just like to sit around and play board games. If you are interested in board games, whether it be learning or playing, we have a seat for you. Come say hello!
                </p>
                <p>
                We meet <b>weekly at Ealing Broadway</b>, most events are free to attend but please refer to the <b>events calendar</b> for the specifics.
                Please arrive between 18:20-19:00, any later and it becomes harder to jump into a game, there's no need to book, just turn up!
                </p>

                <p><em>
                <sub>               
                The club and its events are first and foremost aimed at adults. <b>Children are welcome as long as they are supervised at all times by a parent or carer.</b> The organisers take no responsibility or liability for unsupervised children. Please note that there could be games present that may not be suitable for children.
                </sub>
                </em>
                </p>
              </div>
              {/* <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>*/
              // </form> }
              
              <form>
                    <button type="submit" formAction= {props.data ? props.data.facebook : "/"} className="btn btn-custom btn-lg">
                   Find us on Facebook
                </button>
                {/* <button type="submit" formAction= {props.data ? props.data.ealingProject : "/"} className="btn btn-custom btn-lg">
       Ealing Project
                 </button> */}
              </form> 
  }
            </div>
          </div>
          { <div className="col-md-3 col-md-offset-1 contact-info">
              <h3>Contact Info</h3>
            {/* <div className="contact-item">
              { <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                <a href="https://goo.gl/maps/PpYR2kBD6JZxhzbz6">
                {props.data ? props.data.address : "loading"}
                </a>
              </p> }
            </div>
            { <div className="contact-item">
              { <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p> }
                        { <p>
                <span>
                  <i className="fa fa-clock-o"></i> Time
                </span>{" "}
                {props.data ? props.data.time : "loading"}
              </p> }
            </div> } */}
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {<a href="mailto:ealingboardgames@gmail.com">{props.data ? props.data.email : "loading"}</a>
                }
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-calendar"></i> Event calendar
                </span>{" "}
                { <iframe src="https://calendar.google.com/calendar/embed?height=400&wkst=2&bgcolor=%23ffd731&ctz=Europe%2FLondon&showTitle=0&showNav=1&mode=AGENDA&hl=en_GB&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=ZWFsaW5nYm9hcmRnYW1lc0BnbWFpbC5jb20&color=%23cca400" width="300" height="400" frameborder="0" scrolling="no"></iframe>
                }
              </p>
            </div>
          </div> }
          {/* <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Ealing Board Games Page
          </p>
        </div>
      </div> */
    
      }
    </div>
  );
};
