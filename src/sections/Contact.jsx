import "./../styles/Contact.css";

function Contact() {
  return(
    <section className="contact">
      <div className="contact-main">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-paragraph">If you are interested in contacting me, I'm always open to chat.</p>
        <a className="contact-send-email-button" href="mailto:juanitolaguna1993@gmail.com">Say Hi to Juan!</a>
      </div>
    </section>
  );
}

export default Contact;