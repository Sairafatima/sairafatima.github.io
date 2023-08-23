import React, { Component, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { config } from "../../config";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { form: emptyForm(), response: { code: "", text: "" } };
  }

  componentDidMount() {
    emailjs.init(config.emailJs.publicKey);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = config.emailJs.serviceId;
    const templateId = config.emailJs.templateId;
    let form = this.state.form;
    try {
      await emailjs.send(serviceId, templateId, {
        name: form.name,
        email: form.email,
        message: form.message,
      });
      this.setState({ response: { code: 200, text: "Your email has been sent successfully!" } });
    } catch (error) {
      console.log(error);
      this.setState({ response: { code: 401, text: "An error occurred in sending your email. Please try later" } });
    } finally {
    }
  };

  render() {
    return (
      <div className="profile-data-container">
        <div className="custom-flex-row profile-data-header">
          <h1 className="profile-data-header-heading">CONTACT</h1>
          <img className="profile-data-header-line" src={"/images/common/content_head_line.svg"} alt={""} />
        </div>
        <div className="contact-form-card">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.handleSubmit(e);
            }}
          >
            <input
              required
              placeholder="Name:"
              className="contact-form-input"
              value={this.state.form.name}
              onChange={(e) => {
                let data = this.state.form;
                data.name = e.target.value;
                this.setState({ form: data });
              }}
            />

            <input
              required
              placeholder="Email:"
              className="contact-form-input"
              value={this.state.form.email}
              onChange={(e) => {
                let data = this.state.form;
                data.email = e.target.value;
                this.setState({ form: data });
              }}
            />

            <input
              required
              className="contact-form-input"
              placeholder="Message:"
              value={this.state.form.message}
              onChange={(e) => {
                let data = this.state.form;
                data.message = e.target.value;
                this.setState({ form: data });
              }}
            />
            <button type="submit" className="contact-form-submit">
              <p>Submit</p>
            </button>
            {this.state.response.code ? (
              <p className={this.state.response.code === 200 ? "text-successful" : "text-danger"}>{this.state.response.text}</p>
            ) : (
              <></>
            )}
          </form>
        </div>
      </div>
    );
  }
}

const emptyForm = () => {
  let data = { name: "", email: "", message: "" };
  return data;
};
