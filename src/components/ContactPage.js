import React, { Component } from "react";
import { Parallax } from "react-parallax";
import * as emailjs from 'emailjs-com'
import "../styles/components/_contact.scss";

const image2 =
  "https://images.unsplash.com/photo-1612474341291-42f489fa11d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80";

const firstNameRe = /[A-Z]{1}[a-z]{2,20}/g;
const lastNameRe = /[A-Z]{1}[a-z]{2,20}/g;
const emailRe = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const phoneRe = /[0-9]{10}/g;

export default class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      firstname: "",
      lastname: "",
      message: "",
      email: "",
      phone: "",
      sent: false,
      error: "",

      firstnameError: "",
      lastnameError: "",
      emailError: "",
      phoneError: "",

      //errorText:""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
   // this.formValidation = this.formValidation.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = () => {
    this.setState({
      showForm: true,
    });
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // formValidation = () => {
  //   let firstnameError = "";
  //   let lastnameError = "";
  //   let emailError = "";
  //   let phoneError = "";

  //   if (firstNameRe.test(this.state.firstname)) {
  //     firstnameError = "Invalid First Name";
  //   }
  //   if (lastNameRe.test(this.state.lastname)) {
  //     lastnameError = "Invalid Last Name";
  //   }
  //   if (emailRe.test(this.state.email)) {
  //     emailError = "Invalid Email";
  //   }
  //   if (phoneRe.test(this.state.phone)) {
  //     phoneError = "Invalid Phone number";
  //   }
  //   if (firstnameError || lastnameError || emailError || phoneError) {
  //     this.setState({ firstnameError, lastnameError, emailError, phoneError });
  //     return false;
  //   }
  //   return true;
  // };

  onFormSubmit = (e) => {
    e.preventDefault();

    //const isvalid = this.formValidation();

    // if (isvalid) {
    //   console.log(this.state);

    //   this.setState({
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     phone: "",
    //     firstnameError: "",
    //     lastnameError: "",
    //     emailError: "",
    //     phoneError: "",
    //   });
    // }

       emailjs
      .sendForm(
        "service_qmkim1s",
        "template_l9fzavc",
        e.target,
        "user_TidLj0qzWYcbKwfKAED9y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    this.setState({
      firstname: "",
      lastname: "",
      message: "",
      email:"",
      phone:""
    });
  };

  render() {
    return (
      <Parallax bgImage={image2} blur={{ min: -10, max: 10 }} strength={-300}>
        <div className="wrapper-contact" id="contact">
          <div className="contact-btn">
            {!this.state.showForm && (
              <button className='form-show-btn' onClick={this.handleOnClick}>Get in touch</button>
            )}
          </div>

          {this.state.showForm && (
            <div className="form-container">
              <form onSubmit={this.onFormSubmit}>
                <div className="name2">
                  <label className="input-label">First Name:</label>
                  <input
                    onChange={this.handleOnChange}
                    className="name-input"
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={this.state.firstname}
                  />
                  <div style={{ fontSize: 10, color: "red" }}>
                    {this.state.firstnameError}
                  </div>

                  <label className="input-label">Last Name:</label>
                  <input
                    onChange={this.handleOnChange}
                    className="name-input"
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={this.state.lastname}
                  />
                  <div style={{ fontSize: 10, color: "red" }}>
                    {this.state.lastnameError}
                  </div>
                </div>

                <div className="name2">
                  <label className="input-label">Email</label>
                  <input
                    onChange={this.handleOnChange}
                    className="name-input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                  />
                  <div style={{ fontSize: 10, color: "red" }}>
                    {this.state.emailError}
                  </div>

                  <label className="input-label">Ph No.</label>
                  <input
                    onChange={this.handleOnChange}
                    className="name-input"
                    type="text"
                    placeholder="Phone number"
                    name="phone"
                    value={this.state.phone}
                  />
                  <div style={{ fontSize: 10, color: "red" }}>
                    {this.state.phoneError}
                  </div>
                </div>

                <div className="msg">
                  <label className="text-label">Message:</label>
                  <textarea
                    onChange={this.handleOnChange}
                    className="text-input"
                    placeholder="Type your message here..."
                    name="message"
                    value={this.state.message}
                  />
                </div>
                <div className="send-btn">
                  <button type="submit" className="btn">
                    Send
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </Parallax>
    );
  }
}
