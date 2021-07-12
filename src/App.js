import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Home from './HomePage/Home';
import ActionMenu from './pages/ActionMenu';
import Layout from './components/Layout';
import StudentsList from './pages/StudentsList';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
        <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/actions'>
            <ActionMenu />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/Students'>
            <StudentsList />
          </Route>
          <Redirect to='/'/>
        </Switch>
      </Layout>
    </Router>
  );
}
