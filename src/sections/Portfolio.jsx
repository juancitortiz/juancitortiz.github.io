import Card from '../components/Card';
import './../styles/Portfolio.css';
import data from './../projects.json';

function Portfolio() {
  return(
    <section className="portfolio">
      <div className="portfolio-main">
        <h2 className='portfolio-title'>My Portfolio</h2>
        <p className='portfolio-paragraph'>These are some of my recent works and projects, 
          both in collaboration with other people and on my own as well.</p>
      </div>
      <div className="portfolio-cards">
        <Card content={data.projects[0]}/>
        <Card content={data.projects[1]}/>
        <Card content={data.projects[2]}/>
      </div>
    </section>
  );
}

export default Portfolio;