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
          <h4>Digital Journal</h4>
          <p>
            place to Stay connected to your inner self, your body, your dreams
            and your purpose in life...
          </p>
        </div>
        <div className='home__right'>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Home;
