import { List, ListItem } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h4>Tags</h4>
      <List>
        <ListItem>#gratitude</ListItem>
        <ListItem>#gratitude</ListItem>
        <ListItem>#gratitude</ListItem>
        <ListItem>#gratitude</ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
