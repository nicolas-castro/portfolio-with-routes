import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import ProjectDetails from './ProjectDetails';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/education' component={Education}/>
          <Route path='/experience' component={Experience}/>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;