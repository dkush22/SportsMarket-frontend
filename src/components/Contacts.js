import React from 'react'


const Contacts = () => {
	return(
	<div>
	<h2>Feel Free to Contact Me!</h2>
<div className="ui massive horizontal divided list">
  <div className="item">
    <i className="users icon" />
    <div className="content">
      <a href="https://www.linkedin.com/in/daniel-kushel-15658a78/">LinkedIn</a>
    </div>
  </div>
  <div className="item">
    <i className="marker icon" />
    <div className="content">
      <div className="header">New York, NY</div>
    </div>
  </div>
  <div className="item">
    <i className="mail icon" />
    <div className="content">
    <a href="mailto:dkush22@sportsmarket.com">dkush22@sportsmarket.com</a>
    </div>
  </div>
  <div className="item">
    <i className="linkify icon" />
    <div className="content">
      <a href="https://github.com/dkush22">https://github.com/dkush22</a>
    </div>
  </div>
</div>
	</div>

)
}

export default Contacts