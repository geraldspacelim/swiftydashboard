import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="Container">
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          {/* <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route> */}
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
