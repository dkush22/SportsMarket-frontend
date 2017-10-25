import React from 'react'
import { fetchNFLAthletes } from '../actions/nflAthletes.js'
import { fetchInvestments } from '../actions/investments.js'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

class CompareAthlete extends React.Component {

constructor() {
	super()
	this.state = {
		compare: []
	}
}

componentDidMount() {
this.props.fetchNFLAthletes()
}

handleDropDown = (event) => {
	if (!this.state.compare.includes(event.target.innerText) || (event.target.innerText.length !== 0)) {this.state.compare.push(event.target.innerText)}
	console.log(this.state.compare)
}

deletion = (event) => {
	console.log("delete")
}

mapOverAthletes = () => {
const playerOptions = []
for (let i = 0; i < this.props.nflAthletes.length; i++) {
	playerOptions.push({key: `${this.props.nflAthletes[i].name}`, value: `${this.props.nflAthletes[i].name}`, text: `${this.props.nflAthletes[i].name}`})
}
return playerOptions
 // const mapped = this.props.nflAthletes.map((athlete, index) => <option value={athlete.name} key={index}>{athlete.name}</option>)
 // return mapped
}

render() {
const options = this.mapOverAthletes()
return (
<div>
<h1>Compare Two Players</h1>
<Dropdown onClick={this.deletion} onChange={this.handleDropDown} placeholder='Search for Players' fluid multiple search selection options={options} />
<Button content='Compare' />
</div>
)
}


}

function mapStateToProps(state) {
	return {
		nflAthletes: state.nflAthletes.list,
		isFetching: state.nflAthletes.isFetching,
		id: state.users.user.id,
		investments: state.users.user.investments
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchNFLAthletes: () => {
			dispatch(fetchNFLAthletes())
		}, 
		fetchInvestments: () => {
			dispatch(fetchInvestments())
		}
	}
}





export default connect(mapStateToProps, mapDispatchToProps)(CompareAthlete)