import './App.css';
import Login from './component/Login/login';
import Register from './component/Register/register';
import Timer from './component/timer/timer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
                    <Switch>
                        <Route path="/" exact component={Login}></Route>
                        <Route path="/Timer" component={Timer}></Route>
                        <Route path="/Register" component={Register}></Route>
                        
                    </Switch>
            </Router>
    

   
    </div>
  );
}

export default App;
