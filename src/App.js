import React, { Component } from 'react';
import logo from './images/logo.png'
import './App.css';
import Drawer from './Drawer';
import Overlay from './Overlay'
import { shuffle, drawerOptionsDefinition } from './helpers/helpers';
import { postSubmission, test } from './helpers/ajaxHelpers';
import AlertContainer from 'react-alert';
import ReactGA from 'react-ga';

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
    ReactGA.initialize('UA-98638238-1');

    ReactGA.pageview(window.location.pathname);
    const drawerOptions = shuffle(drawerOptionsDefinition);
    this.setState({drawerOptions});
  }

  toggleModalOn(option) {
    ReactGA.event({
      action: 'Opened Modal',
      optionClicked: option,
      drawerOptions: this.state.drawerOptions
    });
    this.setState(
      { 
        showModal: true,
        optionMostRecentlyClicked: option
      }
    )
  }

  toggleModalOff(toggledCloseWithoutSubmitting = true) {
    if (toggledCloseWithoutSubmitting) {
      ReactGA.event({
        action: 'Closed Modal without submitting their email',
        optionClicked: this.state.optionMostRecentlyClicked,
        drawerOptions: this.state.drawerOptions
      });
    }
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
    ReactGA.event({
        action: 'Submitted email',
        optionClicked: this.state.optionMostRecentlyClicked,
        drawerOptions: this.state.drawerOptions
    });
    postSubmission(
      {
        email, 
        type: this.state.optionMostRecentlyClicked.text
      }
    )
    this.showAlert();
    this.toggleModalOff(false);
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;



