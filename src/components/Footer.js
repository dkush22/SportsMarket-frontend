import React from 'react'
// import { Route, Link, Switch, Redirect } from 'react-router-dom'


const Navbar = () => {
  return(
    <div className="ui inverted vertical footer segment blue">
      <div className="ui center aligned container">
        <div className="ui horizontal inverted small divided link list">
          <a className="item" href="/contact">Contact Us</a>
          <a className="item" href="/termsandconditions">Terms and Conditions</a>
          <a className="item" href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar


  // <a className="item" href="/sitemap">Site Map</a>
