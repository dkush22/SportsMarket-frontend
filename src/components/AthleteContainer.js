import React from 'react'
import AthleteList from './AthleteList.js'

const AthleteContainer = (props) => {
	return (
	<div>
		<h1><AthleteList nflAthletes={props.nflAthletes} /> </h1>

	</div>
)
}


export default AthleteContainer