import React, { Component } from 'react';
import logo from './images/logo.png'
import './App.css';
import Drawer from './Drawer';
import Overlay from './Overlay'
import { shuffle, drawerOptionsDefinition } from './helpers/helpers';
import { postSubmission, postModalClick, registerPageView } from './helpers/ajaxHelpers';
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
    window.$.getJSON('//freegeoip.net/json/?callback=?', data =>{
      
      const city = data.city ? data.city : 'city not found';
      const state = data.region_code ? data.region_code : 'region_code not found';
      const country = data.country_name ? data.country_name : 'country_name not found';

      registerPageView({
          created: new Date(),
          screenWidth: window.innerWidth,
          screenHeight: window.innerHeight,
          city,
          state,
          country
      })
    });
  }

  toggleModalOn(option) {
    postModalClick(
      {
        type: option.text
      }
    )
    ReactGA.event({
      category: 'User',
      action: 'Opened Modal',
      label: option.text
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
        category: 'User',
        action: 'Closed Modal without submitting their email',
        label: this.state.optionMostRecentlyClicked.text
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
      category: 'User',
      action: 'Submitted email',
      label: this.state.optionMostRecentlyClicked.text
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



