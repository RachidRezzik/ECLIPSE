import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom"
import React, {useState} from 'react'
//Components
import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import Men from './components/Men';
import boysSHIRTS from './components/BOYS/boysSHIRTS';
import boysSHORTS from './components/BOYS/boysSHORTS';
import boysJOGGERS from './components/BOYS/boysJOGGERS';
import womenSHIRTS from './components/WOMEN/womenSHIRTS';
import womenSHORTS from './components/WOMEN/womenSHORTS';
import womenLEGGINGS from './components/WOMEN/womenLEGGINGS';
import girlsSHIRTS from './components/GIRLS/girlsSHIRTS';
import girlsSHORTS from './components/GIRLS/girlsSHORTS';
import girlsLEGGINGS from './components/GIRLS/girlsLEGGINGS';

function App() {
  



  return (
    <div className="App">
    <HashRouter basename="/">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MEN" component={Men} />
        <Route exact path="/BOYS/SHIRTS" component={boysSHIRTS} />
        <Route exact path="/BOYS/SHORTS" component={boysSHORTS} />
        <Route exact path="/BOYS/JOGGERS" component={boysJOGGERS} />
        <Route exact path="/WOMEN/SHIRTS" component={womenSHIRTS} />
        <Route exact path="/WOMEN/SHORTS" component={womenSHORTS} />
        <Route exact path="/WOMEN/LEGGINGS" component={womenLEGGINGS} />
        <Route exact path="/GIRLS/SHIRTS" component={girlsSHIRTS} />
        <Route exact path="/GIRLS/SHORTS" component={girlsSHORTS} />
        <Route exact path="/GIRLS/LEGGINGS" component={girlsLEGGINGS} />
      </Switch>
      <Footer />
    </HashRouter>
    </div>
  );
}

export default App;
