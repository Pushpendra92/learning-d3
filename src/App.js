import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import WithoutD3 from './components/WithoutD3'

function App() {
  return (
    <Router>
    <div className="App">
      <h1>
        <Link to ="/without-d3">Without D3</Link>
      </h1>
    </div>
    <Switch>
        <Route path="/without-d3">
          <WithoutD3/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
