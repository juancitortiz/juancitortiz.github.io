import LinkButton from "./LinkButton";
import githubLogo from './../assets/Github.svg';
import linkedinLogo from './../assets/Linkedin.svg';
import gmailLogo from './../assets/Gmail.svg';
import twitterLogo from './../assets/Twitter.svg';

function SideBar() {

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
  const twitterButton = {
    href: 'https://twitter.com/JuanIgn04469126',
    src: twitterLogo,
    alt: 'Twitter Icon'
  }

  return(
    <nav className="sidebar">
      <LinkButton params={githubButton} />
      <LinkButton params={linkedinButton} />
      <LinkButton params={twitterButton} />
      <LinkButton params={gmailButton} />
    </nav>
  );
}

export default SideBar;