import './../styles/Landing.css';

function Landing() {
  return(
    <section className="landing">
      <div className="landing-main">
        <strong className="title">Hello, I'm <strong className="title name">Juan Ortiz</strong><br/>
        I'm a Software Developer!</strong>
      </div>
      <div className="landing-paragraph">
        <p>Hello! My name is Juan and I'm a Game Developer from Argentina. 
          Before I got hooked on programming and game development, I was in the arts world as a musician.<br/>
          I've been mainly working on an indie game called Exorsite for about two years now and also 
          participated in Global Game Jam 2022 in February.
          I'm currently finishing my studies as a Programming Technician.
          <br/>My stacks include Unity, C# and Godot.
          </p>
      </div>
    </section>
  );
}

export default Landing;