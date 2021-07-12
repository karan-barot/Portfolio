import './App.scss';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Intro from './Components/Intro'
import Contact from './Components/Contact'
import Work from './Components/Work'
function App() {
  return (
    <div className="app">
        <Navbar/> 
        <section>
          <Home/>
          <Intro/>
          <Work/>
          <Contact/>
        </section>
    </div>
  );
}

export default App;
