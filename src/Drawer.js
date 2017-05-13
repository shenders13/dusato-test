import React, { Component } from 'react';
import './App.css';

class Drawer extends Component {

  renderDrawerOption(option, toggleModalOn, i) {
    return (
      <div className="drawer-option" key={i} onClick={()=>toggleModalOn(option)}>
        <span className='option-content'>
          <img src={option.img} className="drawer-option-icon"/> 
          <span className="drawer-text">{option.text} </span>
        </span>
      </div>
    )
  }

  render() {

    const { toggleModalOn, drawerOptions } = this.props;
    return (  
        <div className="drawer">
          <p className='mobile-home-for-devs-header'>The home of developers</p>
          { drawerOptions.map((option, i)=> this.renderDrawerOption(option, toggleModalOn, i)) }
        </div>
    );
  }
}

export default Drawer;