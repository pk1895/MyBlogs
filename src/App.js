import React, { Fragment } from 'react';
import Login from './Pages/Authentication/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Register from './Pages/Authentication/Register';
import Sections from './Pages/Sections/Sections';
import { Redirect, Switch, Route } from 'react-router-dom';
import NewPost from './Pages/NewPost/NewPost';
import Navigation from './components/Layout/Navigation';
import { useSelector } from 'react-redux';

function App() {
  const isLogIn = useSelector((state) => state.auth.isLogIn);
  console.info(isLogIn);
  return (
    <Fragment>
      {isLogIn && <Navigation />}

      <Switch>
        <Route path='/' exact>
          <Redirect to='/login' />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/new-post'>
          <NewPost />
        </Route>
        <Route path='/sections'>
          <Sections />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;