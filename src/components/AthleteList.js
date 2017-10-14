import React from 'react'
import Athlete from './Athlete.js'


const AthleteList = (props) => {
	// if (localStorage.getItem('jwtToken')) {
	// var jwtDecode = require('jwt-decode')
	// var token = localStorage.getItem('jwtToken')
	// var decoded = jwtDecode(token)}
	// console.log(decoded)
	return (
		<table className="ui celled padded table">
		<tbody>
		<tr>
		<th>Name</th>
		<th>Original Price</th>
		<th>Current Price</th>
		<th> % Change </th>
		{(localStorage.getItem('jwtToken')) ? <th> Action </th> : null}
		</tr>
			{props.nflAthletes.map((player, index) => <Athlete key={index} athlete={player} investments={props.investments} />)}
			</tbody>
			</table>

		)
}

export default AthleteList