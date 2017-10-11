import React from 'react'


const Navbar = () => {
  return(
    <div className="ui inverted vertical footer segment blue">
      <div className="ui center aligned container">
        <div className="ui horizontal inverted small divided link list">
          <a className="item" href="/">Site Map</a>
          <a className="item" href="/">Contact Us</a>
          <a className="item" href="/">Terms and Conditions</a>
          <a className="item" href="/">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
