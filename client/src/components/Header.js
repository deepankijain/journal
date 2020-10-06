import React from 'react';
import './Header.css';
import { auth, provider } from '../firebase';
import { useStateValue } from '../hooks/StateProvider';
import { useHistory } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
const Header = () => {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const signIn = async () => {
    const result = await auth.signInWithPopup(provider);
    try {
      await dispatch({
        type: 'SET_USER',
        user: result.user,
      });
      history.replace('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='navbar__container'>
      <Navbar expand=''>
        <Navbar.Brand>Journal</Navbar.Brand>
        <Button onClick={signIn} variant='dark'>
          Sign In
        </Button>
      </Navbar>
    </div>
  );
};

export default Header;
