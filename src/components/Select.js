import React from 'react'



class Select extends React.Component {

makeInputs = () => {
let finalArray = []
for (let i = 0; i <= this.props.investment.quantity - 1; i++) {
finalArray.push(<option value={i} key={i}>{i}</option>)
}
return finalArray
}

render() {
return (
<div>
<h3>You currently own {this.props.investment.quantity} share(s) of {this.props.nflAthletes ? (this.props.nflAthletes[0] ? this.props.nflAthletes[0].name : null) : null} at a price of ${this.props.investment.acquisition_price}</h3>
<div className="ui form">
  <div className="fields">
    <div className="field">
      <label># of Shares</label>
      <select className="ui dropdown"  onChange={this.props.onHandleSell}>
      <option value="" ></option>
      {this.makeInputs()}
      </select>
    </div>
    <button className="negative ui button" onClick={this.props.onSellPartial}>Sell</button>
    <button className="negative ui button" onClick={this.props.onSellAll}>Sell All</button>
  </div>
 </div>
 </div>

)
}


}


export default Select