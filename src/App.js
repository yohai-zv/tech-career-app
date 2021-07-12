import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './HomePage/Home';
import ActionMenu from './pages/ActionMenu';
import Layout from './components/Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/actions'>
            <ActionMenu />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
         
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
