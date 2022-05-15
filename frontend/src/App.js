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

function App() {
  return (
    <div className='app'>
    <Router>
      <Topbar sticky="top" />
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
    </div>
  );
}


export default App;