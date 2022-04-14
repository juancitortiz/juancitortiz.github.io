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
          I've been mainly working on an indie game called Exorsite since 2020 and also 
          participated in the Global Game Jam 2022 in February of the same year.
          I'm currently finishing my studies as a Programming Technician.
          <br/>My stacks include Unity, C# and a little of Godot Engine.
          </p>
      </div>
    </section>
  );
}

export default Landing;