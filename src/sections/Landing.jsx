import './../styles/Landing.css';

function Landing() {
  return(
    <section className="landing">
      <div className="landing-main">
        <strong className="title">Hello, I'm <strong className="title highlight">Juan Ortiz</strong><br/>
        I'm a <strong className="title highlight">Game Developer</strong>!</strong>
      </div>
      <div className="landing-paragraph">
        <p>Hello! My name is Juan and I'm a Game Developer from Argentina. 
          Before I got hooked on programming and game development, I roamed through the arts world as a musician.<br/>
          I've been mainly working on Chackpower, an argentinian indie developer, in self published games but also in commercial simulators.
          <br/>
          <br/>My stacks include Unity, C# and a little of Godot Engine.
          </p>
      </div>
    </section>
  );
}

export default Landing;