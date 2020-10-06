import React from 'react';
import './Dashboard.css';
import { AppBar, Avatar, Button } from '@material-ui/core';
import Entry from './Entry';
import { useStateValue } from '../hooks/StateProvider';
import Entries from './Entries';
const Dashboard = () => {
  const [{ user }] = useStateValue();
  console.log(`dashboard user>>>>`, user);
  return (
    <div className='dashboard'>
      <AppBar className='dashboard__appbar'>
        <div className='dashboard__info'>
          <Avatar src={user?.photoURL} className='dashboard__avatar' />
          <h1>{user?.displayName}</h1>
        </div>
        <Button>Sign Out</Button>
      </AppBar>
      <div className='dashboard__container'>
        <Entry />
        <Entries />
      </div>
    </div>
  );
};

export default Dashboard;
