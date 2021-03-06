import './App.css';
import Navbar from './components/layout/Navbar'
import User from './components/users/User';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/pages/About';
import Home from './components/pages/Home';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';

function App() {

  return (
    <GithubState>
      <AlertState>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className='container'>
            <Alert></Alert>
            <Switch>
              <Route exact path='/'component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/user/:login' component={User}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router >
      </AlertState>
    </GithubState>
  );
}

export default App;
