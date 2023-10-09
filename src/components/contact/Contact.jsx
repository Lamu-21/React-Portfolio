import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsappSquare } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6q03xo1",
      "template_mvjvivt",
      form.current,
      "4I10jQOViqvWIXLu4"
    ) .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
};
  

  return (
    <section id="contact">
      <h5 className="c">Get In Touch</h5>
      <h2 className="c"> Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>phuplamub@gmail.com</h5>
            <a href="mailto:phuplamub@gmai.com">Sent a message</a>
          </article>
          <article className="contact__option">
            <CiLinkedin className="contact__option-icon" />
            <h4>LinkedIN</h4>
            <h5>Lamu Bhutia</h5>
            <a href="https://www.linkedin.com/in/phup-lamu-bhutia-62b892249">
              Sent a message
            </a>
          </article>

          <article className="contact__option">
            <FaWhatsappSquare className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>7364942462</h5>
            <a href="https://api.whatsapp.com/send?phone+917364942462">
              Sent a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Leave a messsage"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
