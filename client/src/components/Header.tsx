import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth.jsx';

interface props {
  currentUser: string;
}

const Header = ({ currentUser }: props) => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        Streamer
      </Link>
      <div className='right menu'>
        {!!currentUser ? <div className='item'>{currentUser}</div> : null}
        <Link to='/' className='item'>
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

interface state {
  auth: {
    currentUser: string;
  };
}

const mapStateToProps = (state: state) => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Header);
