import React from 'react';
import { Button } from 'react-bootstrap';
import { auth, provider } from '../firebase';
import { useStateValue } from '../hooks/StateProvider';
import { useHistory } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const signUp = async () => {
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
    <div className='signUp'>
      <h1>Join For Free</h1>
      <div>
        <Button variant='dark' type='submit' onClick={signUp}>
          Sign Up With Google
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
