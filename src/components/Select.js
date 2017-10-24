import React from 'react'
import { connect } from 'react-redux'
import { fetchInvestments } from '../actions/investments.js'
import { fetchUsers } from '../actions/users.js'
import { modifyInvestment } from '../services/investment.js'
import { deleteInvestment } from '../services/investment.js'



class Select extends React.Component {

constructor() {
  super()
  this.state = {
    quantity: ""
  }
}

makeInputs = () => {
let finalArray = []
for (let i = 0; i <= this.props.investment.quantity - 1; i++) {
finalArray.push(<option value={i} key={i}>{i}</option>)
}
return finalArray
}

handleSellPartial = () => {
const modifiedInvestmentParams = {id: this.props.investment.id, quantity: this.state.quantity}
modifyInvestment(modifiedInvestmentParams, this.props.fetchInvestments, this.props.fetchUsers)
this.props.onSellPartial()
}

handleSellAll = () => {
const investmentParams = {id: this.props.investment.id}
deleteInvestment(investmentParams, this.props.fetchInvestments, this.props.fetchUsers)
this.props.onSellAll()
}

handleChangeSell = (event) => {
this.setState({
  quantity: parseInt(event.target.value, 10)
})
}

render() {
return (
<div>
<h3>You currently own {this.props.investment.quantity} share(s) of {this.props.nflAthletes ? (this.props.nflAthletes[0] ? this.props.nflAthletes[0].name : null) : null} at a price of ${this.props.investment.acquisition_price}</h3>
<div className="ui form">
  <div className="fields">
    <div className="field">
      <label># of Shares</label>
      <select className="ui dropdown"  onChange={this.handleChangeSell}>
      <option value="" ></option>
      {this.makeInputs()}
      </select>
    </div>
    <button className="negative ui button" onClick={this.handleSellPartial}>Sell</button>
    <button className="negative ui button" onClick={this.handleSellAll}>Sell All</button>
  </div>
 </div>
 </div>

)
}

}

function mapDispatchToProps(dispatch) {
  return {
    fetchInvestments: () => {
      dispatch(fetchInvestments())
    },
    fetchUsers: () => {
      dispatch(fetchUsers())
    }
  }
}



export default connect(null, mapDispatchToProps)(Select)