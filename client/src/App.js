import './App.css';
import { Route } from 'react-router-dom';
import Landing from './views/Landing';
import Home from './views/Home'
import CreateActivy from './component/form/CreateActivy';
import Nav from './component/nav/Nav';
import Details from './component/nav/Details';

function App() {
  return (
    <div>
      <Route path='/main' component={Nav} />
      <Route exact path='/' component={Landing} />
      <Route exact path='/main' component={Home} />
      <Route path='/main/create_activy' component={CreateActivy} />
      <Route exact path='/main/details/:id' component={Details}></Route>
    </div>
  )
}

export default App;
