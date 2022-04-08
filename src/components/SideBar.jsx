import LinkButton from "./LinkButton";
import githubLogo from './../assets/Github.svg';
import linkedinLogo from './../assets/Linkedin.svg';
import gmailLogo from './../assets/Gmail.svg';

function SideBar() {

  const githubButton = {
    href: 'https://github.com/juancitortiz',
    src: githubLogo,
    alt: 'Github Icon'
  }
  const linkedinButton = {
    href: 'https://www.linkedin.com/in/juan-ignacio-ortiz-innocenti-37a6851a4/',
    src: linkedinLogo,
    alt: 'Github Icon'
  }
  const gmailButton = {
    href: 'juanitolaguna1993@gmail.com',
    src: gmailLogo,
    alt: 'Github Icon'
  }

  return(
    <nav className="sidebar">
      <LinkButton params={githubButton} />
      <LinkButton params={linkedinButton} />
      <LinkButton params={gmailButton} />
    </nav>
  );
}

export default SideBar;