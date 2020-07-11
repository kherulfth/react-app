import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Home, About, Contact, News , Footer, Content, List } from './views/Index';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
              <ul class="topnav" id="dropdownClick">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Form</Link></li>
                <li><Link to="/list">List</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
          </nav>
        </header>
        
        <Content />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/news">
            <News/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/list">
            <List/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>

        

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
