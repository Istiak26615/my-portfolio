import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm("service_qq7475o","template_lndtdex")  
    emailjs.sendForm('service_qq7475o', 'template_lndtdex', e.target, "user_Merpm99EU3zcp3DrcHkac")
    .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
      <div className="container justify-content-center">
        <h1 className="text-center">Contact</h1>
      <div className="row container justify-content-center">
      
        <div className="col-md-4">

        </div>
        <div className="align-items-center col-md-4">
          <form ref={form} onSubmit={sendEmail}>
      <br/>
      <input className="m-2 p-2" placeholder="Name" type="text" name="name" /><br/>
      {/* <label>Email</label><br/> */}
      <input className="m-2 p-2" placeholder="Email" type="user_email" name="email" /><br/>
      {/* <label>Message</label><br/> */}
      <textarea className="m-2 p-3" placeholder="Message" name="message" /><br/>
      <input className="btn btn-primary m-2" type="submit" value="Send" /><br/>
    </form>
        </div>
        </div>
        </div>
    );
};

export default Contact;