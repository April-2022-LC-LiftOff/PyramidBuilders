import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Home from './components/contentPages/Home';
import Profile from './components/contentPages/Profile';
import Search from './components/contentPages/Search';
import Filter from './components/contentPages/Filter';
import Review from './components/contentPages/Review';
import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer';
import { Fragment } from 'react';
import ScrollButton from './components/Footer/ScrollButton';


function App() {
  return (
    <div className='app'>
      <Router>
        <Topbar />
        <div className='app-container'>
          <Sidebar />
          <div className='page-container'>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/review" component={Review} />
              <Route path="/search" component={Search} />
              <Route path="/filter" component={Filter} />
            </Switch>
          </div>
        </div>
      </Router>
      <Footer/>
      <ScrollButton />

    </div>
  );
}


export default App;