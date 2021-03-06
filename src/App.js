import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Home from './HomePage/Home';
import Students from './pages/Students';
import Layout from './components/Layout';

export default function App() {
  
  return (
    <Router>
      <Layout>
        <Switch>
        <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/Students'>
           <Students/>
          </Route>
          <Redirect to='/'/>
        </Switch>
      </Layout>
    </Router>
  );
}
