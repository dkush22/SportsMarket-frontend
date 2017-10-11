import React from 'react'
import { connect } from 'react-redux'
import { Input, Icon } from 'semantic-ui-react'
import { searchNFLAthletes } from '../actions/nflAthletes.js'


class AthletesForm extends React.Component {

constructor() {
	super()
	this.state = {
		inputName: ""
	}
}

  handleSearchSubmit = (event) => {
    event.preventDefault()
    const filteredPlayers = this.props.nflAthletes.filter(player => player.name.toLowerCase().includes(this.state.inputName.toLowerCase()))
    console.log(filteredPlayers)
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
	const selectedPosition = this.props.nflAthletes.filter(player => player.position.includes(event.target.value))
	console.log(selectedPosition)
}


  render() {
    return (
      <div>

      <Input onChange={this.handleInputSearch}
        icon={<Icon onClick={this.handleSearchSubmit} name='search' inverted circular link />}
        placeholder='Search for Athlete'
      /><br/>
<div className="ui form">
  <div className="inline fields">
    <label>Search By Position</label>
    <div className="field">
      <div className="ui radio checkbox">
        <input type="radio" name="frequency" onClick={this.handleCheckbox} defaultChecked="true" value="QB"/>
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

export default connect(mapStateToProps)(AthletesForm)
