import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import dynamic from 'next/dynamic'
import { toast } from 'react-toastify';
const Fade = dynamic(() => import('react-reveal/Fade'), {ssr: false});

const Contact = () => {
  const [formData, setFormData] =
  useState({
    name: '',
    email: '',
    message: ''
  })
  const { name, email, message } = formData;

  const onSubmit = (event) => {
    event.preventDefault();
    
    emailjs.sendForm('service_7mmw136', 'template_ub6kjr8', event.target, 'user_CeUFgLS0y9mViIM0qPkKp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    })

    toast.success("Your message has been sent!")
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value })
  }


  return (
    <Fade duration={3000} delay={150}>
      <div className="container-fluid contact-container"> 
        <div className="row justify-content-center margin-top">
          <h1><b>C<u>ONTAC</u>T</b></h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <form onSubmit={onSubmit}>
              <div className="form-group col-6 mx-auto">
                <input
                  onChange={handleChange}
                  type="name"
                  name="name"
                  className="form-control"
                  value={name}
                  placeholder="name..."
                  required="required" />
              </div>
              <div className="form-group col-6 mx-auto">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  placeholder="email..."
                  required="required" />
              </div>
              <div className="form-group col-6 mx-auto">
                <textarea
                  onChange={handleChange}
                  className="form-control"
                  type="text"
                  name="message"
                  value={message}
                  placeholder="message...">
                </textarea>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center social">
          <a href="https://linkedin.com/in/olly-bolland/" target="_blank" >
            <span className="iconify" id="social" data-icon="foundation:social-linkedin" data-inline="false"></span>
          </a>
          <a href="https://github.com/obolland/" target="_blank" >
            <span className="iconify" id="social" data-icon="foundation:social-github" data-inline="false"></span>
          </a>
          <a href="https://codepen.io/ollybolland/" target="_blank" >
            <span className="iconify" id="social" data-icon="ant-design:codepen-outlined" data-inline="false"></span>
          </a>
        </div>
      </div>
    </Fade>
  )
}

export default Contact;