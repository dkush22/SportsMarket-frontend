import React from 'react'
import { connect } from 'react-redux'
import { Input, Icon } from 'semantic-ui-react'
import { searchNFLAthletesByName, fetchNFLAthletes, searchNFLAthletesByPosition } from '../actions/nflAthletes.js'


class AthletesForm extends React.Component {

constructor() {
	super()
	this.state = {
		inputName: ""
	}
}

  handleSearchSubmit = (event) => {
    event.preventDefault()
    this.props.searchNFLAthletesByName(this.state.inputName)
    // const filteredPlayers = this.props.nflAthletes.filter(player => player.name.toLowerCase().includes(this.state.inputName.toLowerCase()))
    // console.log(filteredPlayers)
    this.setState({
      inputName: "",
    })

  }

handleInputSearch = (event) => {
	this.setState({
		inputName: event.target.value
	})
}

handleCheckbox = (event) => {
	// const selectedPosition = this.props.nflAthletes.filter(player => player.position.includes(event.target.value))
	// console.log(selectedPosition)
  if (event.target.value === "All") {
    this.props.fetchNFLAthletes()
  } else {
  this.props.searchNFLAthletesByPosition(event.target.value)
  }
}

handleButton = () => {
  this.props.fetchNFLAthletes()
}


  render() {
    return (
      <div>

      <Input onChange={this.handleInputSearch} value={this.state.inputName}
        icon={<Icon onClick={this.handleSearchSubmit} name='search' inverted circular link />}
        placeholder='Search for Athlete'/> <button onClick={this.handleButton}>Show All Athletes</button><br/>
<div className="ui form">
  <div className="inline fields">
    <label>Search By Position</label>
     <div className="field">
      <div className="ui radio checkbox">
        <input type="radio" name="frequency" onClick={this.handleCheckbox} defaultChecked="true" value="All"/>
        <label>All</label>
      </div>
    </div>
    <div className="field">
      <div className="ui radio checkbox">
        <input type="radio" name="frequency" onClick={this.handleCheckbox} value="QB"/>
        <label>QB</label>
      </div>
    </div>
    <div className="field">
      <div className="ui radio checkbox">
        <input type="radio" name="frequency" onClick={this.handleCheckbox} value="RB"/>
        <label>RB</label>
      </div>
    </div>
    <div className="field">
      <div className="ui radio checkbox">
        <input type="radio" name="frequency" onClick={this.handleCheckbox} value="WR"/>
        <label>WR</label>
      </div>
    </div>
    <div className="field">
      <div className="ui radio checkbox">
        <input type="radio" name="frequency" onClick={this.handleCheckbox} value="TE"/>
        <label>TE</label>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		nflAthletes: state.nflAthletes.list,
		isFetching: state.nflAthletes.isFetching
	}
}

function mapDispatchToProps(dispatch) {
  return {
    searchNFLAthletesByName: (name) => {
      dispatch(searchNFLAthletesByName(name))
    },
    fetchNFLAthletes: () => {
      dispatch(fetchNFLAthletes())
    }, 
    searchNFLAthletesByPosition: (position) => {
      dispatch(searchNFLAthletesByPosition(position))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AthletesForm)
