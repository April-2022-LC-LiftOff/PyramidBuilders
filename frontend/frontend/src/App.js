import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import HomePage from './components/HomePage';
import {BrowserRouter, Switch, Route} from 'react-router';
import Profile from './components/Profile/Profile';
import Search from './components/Search';
import Filter from './components/Filter';
import Review from './components/Review';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Topbar />
      <Sidebar />
      <Switch>
        <Route path="/">
        <HomePage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/profile">
        <Profile />
        </Route>
      </Switch>
      <Switch>
        <Route path="/review">
        <Review />
        </Route>
      </Switch>
      <Switch>
        <Route path="/search">
        <Search />
        </Route>
      </Switch>
      <Switch>
        <Route path="/filter">
        <Filter />
        </Route>
      </Switch>

      
    </div>
    </BrowserRouter>


  );
}


export default App;