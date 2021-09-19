import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './views/Landing';
import Home from './views/Home'
import CreateActivy from './component/form/CreateActivy';
import Nav from './component/nav/Nav';
import Details from './component/nav/Details';

function App() {
  return (
    <BrowserRouter>
        <Route path='/main' component={Nav} />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/main/' component={Home} />
          <Route  path='/main/:id' component={Details} />
          <Route path='/createActivy'component={CreateActivy} />
        </Switch>
    </BrowserRouter>
  )
}



export default App;
