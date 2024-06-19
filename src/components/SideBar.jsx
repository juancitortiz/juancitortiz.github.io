import LinkButton from "./LinkButton";
import githubLogo from './../assets/Github.svg';
import linkedinLogo from './../assets/Linkedin.svg';
import gmailLogo from './../assets/Gmail.svg';
import gitlabLogo from './../assets/Gitlab.svg';

function SideBar() {

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
    <nav className="sidebar">
      <LinkButton params={gitlabButton} />
      <LinkButton params={linkedinButton} />
      <LinkButton params={githubButton} />
      <LinkButton params={gmailButton} />
    </nav>
  );
}

export default SideBar;