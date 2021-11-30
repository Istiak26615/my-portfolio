import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

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
      <div className="row container">
        <div className="col-md-4">
          {/* Address:<br/>
          Boro Dewra, Tongi, Gazipur<br/>
          Contact:<br/>
          01679248713<br/> */}


        </div>
        <div className="align-items-center col-md-4">
          <form ref={form} onSubmit={sendEmail}>
      <label>Name  </label><br/>
      <input type="text" name="name" /><br/>
      <label>Email</label><br/>
      <input type="user_email" name="email" /><br/>
      <label>Message</label><br/>
      <textarea name="message" /><br/>
      <input type="submit" value="Send" /><br/>
    </form>
        </div>
        </div>
    );
};

export default Contact;