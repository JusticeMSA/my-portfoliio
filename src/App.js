import React, {useState} from 'react';
import './App.scss';
import './_theme.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//import components
import Header from './componets/Shared/Header/Header';
import Home from './componets/Home/Home';


function App() {

  const [menuOpen, setmenuOpen] = useState(false);
  
  return (


    <Router>
      <div className="App">
        <Header 
          menuOpen={menuOpen} 
          setmenuOpen={setmenuOpen} 
        />
        
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
