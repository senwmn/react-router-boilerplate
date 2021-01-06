// core react & utilities
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// componentws and pages
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Page from './pages/Page';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/page">
          <Page />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
