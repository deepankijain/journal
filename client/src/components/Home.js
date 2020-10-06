import React from 'react';
import SignUp from './SignUp';
import './Home.css';
import Header from './Header';
const Home = () => {
  return (
    <div className='home'>
      <Header />
      <div className='home__container'>
        <div className='home__left'>
          <p>A place to vent out feelings or write memories...</p>
        </div>
        <div className='home__right'>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Home;
