import React, { Component } from 'react';
import logo from './images/logo.png'
import './App.css';
import Drawer from './Drawer';
import Overlay from './Overlay'
import codeIcon from './images/code-icon.png';
import hackathon from './images/hackathon.png';
import hireIcon from './images/hire-icon.png';
import meetupIcon from './images/meetup-icon.png';
import teachIcon from './images/teach-icon.png';
import moneyIcon from './images/money-icon.png';
import offerIcon from './images/offer-icon.png';
import techCofounderIcon from './images/tech-cofounder.png';
import { shuffle } from './helpers/helpers';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      showModal: false,
      buttonMostRecentlyClicked: null,
      drawerOptions: []
    };
  }

  componentWillMount() {
    let drawerOptions = [
      { img: techCofounderIcon, text: "Find a cofounder" },
      { img: meetupIcon, text: "Find a tech meetup" },
      { img: hackathon, text: "Find hackathons" },
      { img: teachIcon, text: "Teach coding to others" },
      { img: moneyIcon, text: "Receive full time position offers" },
      { img: offerIcon, text: "Get local contract offers" }
    ];
    drawerOptions = shuffle(drawerOptions);
    this.setState({drawerOptions});
  }

  toggleModal(optionText) {
    if (typeof(optionText) === "string") {
      this.setState(
        { 
          showModal: true,
          buttonMostRecentlyClicked: optionText
        }
      )
    }  else {
      this.setState(
        { 
          showModal: false,
          buttonMostRecentlyClicked: null
        }
      )
    }
  }

  render() {
    const toggleModal = this.toggleModal.bind(this);
    const { buttonMostRecentlyClicked, showModal, drawerOptions } = this.state
    return (  
      <div className="App">
        <Overlay {...{showModal, toggleModal, buttonMostRecentlyClicked }} />
        <div className="navbar">
          <div className="logo-container">
            <img src={logo} className='dusato-logo'/><span className='dusato-badge'> dusato </span>
          </div>
          <div className="sign-in-container">
            <span> sign in</span>
          </div>
        </div>
        <div className="main-container">
          <Drawer {...{ toggleModal, drawerOptions }}/>
          <div className="main-content">
            <p className="main-header"> The marketplace for hiring developers </p>
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
