import './styles/App.css';
import Landing from './sections/Landing';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Landing />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;