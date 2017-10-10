import React from 'react'
import Athlete from './Athlete.js'


const AthleteList = (props) => {
	return (
		<table>
		<tbody>
		<tr>
		<th>Name</th>
		<th>Original Price</th>
		<th>Current Price</th>
		<th> % Change </th>
		</tr>
			{props.nflAthletes.map((player, index) => <Athlete key={index} athlete={player} />)}
			</tbody>
			</table>

		)
}

export default AthleteList