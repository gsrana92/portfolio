import React, { Component } from "react";
import { Parallax } from "react-parallax";

const image2 =
  "https://images.unsplash.com/photo-1612474341291-42f489fa11d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80";

export default class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: true,
    };
  }

  onChange = () => {
      
  }

  onFormSubmit = (e) => {
      e.preventDefault();

  }
  render() {
    return (
      <Parallax bgImage={image2} blur={{ min: -10, max: 10 }} strength={-300}>
        <div className="contact" id="contact">
          <div className="form-container">
            <form onSubmit={this.onFormSubmit}>
              <div className="name">
                <label className="input-label">First Name:</label>
                <input
                  className="name-input"
                  type="text"
                  placeholder="First Name"
                />
                <label className="input-label">Last Name:</label>
                <input
                  className="name-input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <div className="msg">
                <label className="text-label">Message:</label>
                <textarea
                  className="text-input"
                  placeholder="Type your message here..."
                />
              </div>
              <div className="send-btn">
                <button className="btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </Parallax>
    );
  }
}

// import React from "react";
// import { Parallax } from "react-parallax";

// const image2 =
//   "https://images.unsplash.com/photo-1612474341291-42f489fa11d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80";

// export const ContactPage = () => {
//   return (
//     <Parallax bgImage={image2} blur={{ min: -10, max: 10 }} strength={-100}>
//       <div className="contact" id="contact">
//         <form>
//           <label>First Name</label>
//           <input type="text" />
//           <label>Last Name</label>
//           <input type='text'/>
//           <label>Message</label>
//           <textarea />
//           <button>Send</button>

//         </form>
//         {<button className="btn">Get in touch</button>}
//       </div>
//     </Parallax>
//   );
// };

// export default ContactPage;
