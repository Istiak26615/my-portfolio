import logo from './logo.svg';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div>
    
      <Router>
      <Menubar></Menubar>
      
        <Switch>
        <Route exact path="/">
        <Banner></Banner>
        </Route>
        <Route exact path="/">
        <About></About>
        </Route>
        <Route exact path="/">
        <Skills></Skills>
        </Route>
        <Route exact path="/">
        <Projects></Projects>
        </Route>
        <Route exact path="/">
        <Contact></Contact>
        </Route>
        <Route exact path="/about">
        <About></About>
        </Route>
        <Route exact path="/skills">
        <Skills></Skills>
        </Route>
        <Route exact path="/projects">
        <Projects></Projects>
        </Route>
        <Route exact path="/contact">
        <Contact></Contact>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
      
    </div>
  );
}

export default App;
