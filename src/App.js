import React, { Component } from 'react';
import logo from './logo.svg';
import jackAvatar from './jack-avatar.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <span> dusato </span> <span> sign in</span>
        </div>
        <div className="main-container">
          <div className="drawer">
            <div className="drawer-option">
              <span> Find a tech cofounder </span>
            </div>
            <div className="drawer-option">
              <span> Find a tech meetup</span>
            </div>          <div className="drawer-option">
              <span> Find hackathons </span>
            </div>          <div className="drawer-option">
              <span> Teach coding to others </span>
            </div>
          </div>
          <div className="main-content">
            <p className="main-header"> The marketplace for hiring developers </p>
            <div className="button-row">
              <button className='main-button'>I'm a hacker</button>
              <button className='main-button no-margin'>I'm a hirer</button>
            </div>
            <div className="review-container">
              <div className='col-xs-30 push-avatar-right'>
                <img src={jackAvatar} className="review-avatar"/>
              </div>
              <div className='col-xs-70'>
                <p className="review-content"> “I accepted an offer 6 days of signing up to dusato.
                  <br/> It made the job hunt a breeze.” 
                </p>
                <p className="reviewer-description"> “Simon Roach, Full stack developer” 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
