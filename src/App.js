import React, { Component } from 'react';
import logo from './images/logo.png'
import './App.css';
import Drawer from './Drawer';
import Overlay from './Overlay'
import { shuffle, drawerOptionsDefinition } from './helpers/helpers';
import { postSubmission, test } from './helpers/ajaxHelpers';
import AlertContainer from 'react-alert';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      showModal: false,
      optionMostRecentlyClicked: null,
      drawerOptions: []
    };
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'dark',
      transition: 'scale'
    };
    this.showAlert = this.showAlert.bind(this);
  }

  componentWillMount() {
    const drawerOptions = shuffle(drawerOptionsDefinition);
    this.setState({drawerOptions});
  }

  toggleModalOn(option) {
      this.setState(
        { 
          showModal: true,
          optionMostRecentlyClicked: option
        }
      )
  }

  toggleModalOff(option) {
    this.setState(
      { 
        showModal: false,
        optionMostRecentlyClicked: null
      }
    )
  }

  showAlert(){
    this.msg.show("Early access request successful! We'll be in touch.", {
      time: 7000,
      type: 'success'
    });
  }

  submitEmail(email) {
    postSubmission(
      {
        email, 
        type: this.state.optionMostRecentlyClicked.text
      }
    )
    this.showAlert();
    this.toggleModalOff();
  }

  render() {
    const toggleModalOn = this.toggleModalOn.bind(this);
    const toggleModalOff = this.toggleModalOff.bind(this);
    const submitEmail = this.submitEmail.bind(this);
    const { optionMostRecentlyClicked, showModal, drawerOptions } = this.state
    return (  
      <div className="App">
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        <Overlay {...{showModal, toggleModalOff, optionMostRecentlyClicked, submitEmail }} />
        <div className="navbar">
          <div className="logo-container">
            <img src={logo} className='dusato-logo'/><span className='dusato-badge'> dusato </span>
          </div>
          <div className="sign-in-container">
            <span> sign in</span>
          </div>
        </div>
        <div className="main-container">
          <Drawer {...{ toggleModalOn, drawerOptions }}/>
          <div className="main-content">
            <p className="main-header"> The home for developers </p>
            <div className="button-row">
              <button className='main-button'>I'm a hacker</button>
              <button className='main-button no-margin'>I'm a hirer</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



