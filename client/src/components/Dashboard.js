import React from 'react';
import './Dashboard.css';
import { AppBar, Avatar, Button } from '@material-ui/core';
import Entry from './Entry';
import { useStateValue } from '../hooks/StateProvider';
import Entries from './Entries';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
const Dashboard = () => {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const signOut = async () => {
    await auth.signOut();
    try {
      await dispatch({
        type: 'SET_USER',
        user: null,
      });
      history.replace('/');
    } catch (error) {}
  };

  console.log(`dashboard user>>>>`, user);
  return (
    <div className='dashboard'>
      <AppBar className='dashboard__appbar'>
        <div className='dashboard__info'>
          <Avatar src={user?.photoURL} className='dashboard__avatar' />
          <h1>Hello, {user?.displayName}!</h1>
        </div>
        <Button onClick={signOut}>Sign Out</Button>
      </AppBar>
      <div className='dashboard__container'>
        <Entry />
        <Entries />
      </div>
    </div>
  );
};

export default Dashboard;
