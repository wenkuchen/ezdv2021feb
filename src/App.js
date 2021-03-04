import Nav from './components/nav/nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../src/pages/home';
import Services from '../src/pages/services';
import About from '../src/pages/about';


function App() {
  return (
    <Router><div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" ><Home/></Route>
        <Route path="/services" ><Services/></Route>
        <Route path="/about" ><About/></Route>
        <Route ><h2>No Match</h2></Route>
      </Switch>
    </div></Router>
  );
}

export default App;
