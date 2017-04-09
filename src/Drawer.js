import React, { Component } from 'react';
import './App.css';

class Drawer extends Component {



  renderDrawerOption(option, toggleModal, i) {
    return (
      <div className="drawer-option" key={i} onClick={()=>toggleModal(option.text)}>
        <span className='option-content'>
          <img src={option.img} className="drawer-option-icon"/> 
          <span className="drawer-text">{option.text} </span>
        </span>
      </div>
    )
  }

  render() {

    const { toggleModal, drawerOptions } = this.props;
    return (  
        <div className="drawer">
          { drawerOptions.map((option, i)=> this.renderDrawerOption(option, toggleModal, i)) }
        </div>
    );
  }
}

export default Drawer;