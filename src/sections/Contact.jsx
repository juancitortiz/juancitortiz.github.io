import LinkButton from "./../components/LinkButton";
import githubLogo from './../assets/Github.svg';
import linkedinLogo from './../assets/Linkedin.svg';
import gmailLogo from './../assets/Gmail.svg';
import gitlabLogo from './../assets/Gitlab.svg';
import "./../styles/Contact.css";

function Contact() {

  const gitlabButton = {
    href: 'https://gitlab.com/juanitolaguna1993',
    src: gitlabLogo,
    alt: 'Gitlab Icon'
  }
  const githubButton = {
    href: 'https://github.com/juancitortiz',
    src: githubLogo,
    alt: 'Github Icon'
  }
  const linkedinButton = {
    href: 'https://www.linkedin.com/in/juan-ignacio-ortiz-innocenti-37a6851a4/',
    src: linkedinLogo,
    alt: 'LinkedIn Icon'
  }
  const gmailButton = {
    href: 'mailto:juanitolaguna1993@gmail.com',
    src: gmailLogo,
    alt: 'Gmail Icon'
  }

  return(
    <section className="contact">
      <div className="contact-main">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-paragraph">If you are interested in contacting me, I'm always open to chat.</p>
        <a className="contact-send-email-button" href="mailto:juanitolaguna1993@gmail.com">Say Hi to Juan!</a>
        <a className="contact-send-email-button" href="https://drive.google.com/uc?export=download&id=1tZVdXFufUZuTBxh6F5Vdmue2mHJr1gMz">My resume</a>
      </div>
      <div className="contact-mobile">
        <LinkButton params={gitlabButton} />
        <LinkButton params={githubButton} />
        <LinkButton params={linkedinButton} />
        <LinkButton params={gmailButton} />
      </div>
    </section>
  );
}

export default Contact;