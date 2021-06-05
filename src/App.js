import React, { Fragment } from 'react';
import Login from './Pages/Authentication/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Register from './Pages/Authentication/Register';
import Sections from './Pages/Sections/Sections';
import Subsection from './Pages/Subsection/Subsection';
import PostDetail from "./components/Post/PostDetail";
import PostRead from "./components/Post/PostRead";
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

        {isLogIn ? <Route path='/dashboard'>
          <Dashboard />
        </Route> : <Redirect to='/login' />}

        {isLogIn ? <Route path='/new-post'>
          <NewPost />
        </Route> : <Redirect to='/login' />}

        {isLogIn ? <Route path='/sections'>
          <Sections />
        </Route> : <Redirect to='/login' />}

        {isLogIn ? <Route path='/section/:id'>
          <Subsection />
        </Route> : <Redirect to='/login' />}

        {isLogIn ? <Route path='/post-detail'>
          <PostDetail />
        </Route> : <Redirect to='/login' />}

        {isLogIn ? <Route path='/post-read'>
          <PostRead />
        </Route> : <Redirect to='/login' />}
      </Switch>
    </Fragment>
  );
}

export default App;