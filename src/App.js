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
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div>
    
      <Router>
      <Menubar></Menubar>
      
        <Switch>
        <Route exact path="/">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
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
        <Route exact path="/projectDetails/:id">
            <ProjectDetails></ProjectDetails>
          </Route>
        </Switch>
        
      </Router>
      
      
    </div>
  );
}

export default App;
