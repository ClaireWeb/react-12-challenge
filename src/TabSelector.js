import React from 'react';

const TabSelector = props => (
  <div className="TabSelector">
    <button
      id="home"
      onClick={props.handleChangeTab}
      className={props.activeId === 'home' ? 'active' : ''}
    >
      Home
    </button>
    <button
      id="about"
      onClick={props.handleChangeTab}
      className={props.activeId === 'about' ? 'active' : ''}
    >
      About
    </button>
    <button
      id="contact"
      onClick={props.handleChangeTab}
      className={props.activeId === 'contact' ? 'active' : ''}
    >
      Contact
    </button>
  </div>
)

export default TabSelector;
