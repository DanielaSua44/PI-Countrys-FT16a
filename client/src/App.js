import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './views/Landing';
import Home from './views/Home'
import CreateActivy from './component/form/CreateActivy';
import Nav from './component/nav/Nav';

function App() {
  return (
    <div>
      <Route path='/main' component={Nav} />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/main' component={Home} />
        <Route path='/main/create_activy' component={CreateActivy} />
      </Switch>
    </div>
  )
}

export default App;
