import React from 'react'
import { fetchNFLAthletes } from '../actions/nflAthletes.js'
import { fetchInvestments } from '../actions/investments.js'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'

class CompareAthlete extends React.Component {

constructor() {
	super()
	this.state = {
		compareOne: "",
		compareTwo: ""
	}
}

componentDidMount() {
this.props.fetchNFLAthletes()
}

handleDropDownOne = (event) => {
	this.setState({
		compareOne: event.target.innerText
	})
}

handleDropDownTwo = (event) => {
	this.setState({
		compareTwo: event.target.innerText
	})
}

compare = (event) => {
	const oneNFL = this.props.nflAthletes.filter(player => player.name === this.state.compareOne)
	const twoNFL = this.props.nflAthletes.filter(player => player.name === this.state.compareTwo)
    console.log(oneNFL)
    console.log(twoNFL)
	this.setState({
		playerOne: oneNFL,
		playerTwo: twoNFL
	})
}

// getRandomColor = () => {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }


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
var barData = {
      labels: ["Initial Stock Price", "Current Stock Price"],
      datasets: [{
        label: `${this.state.playerOne ? this.state.playerOne[0].name : null}`,
        backgroundColor: ["#3A00FF", "#3A00FF"],
        borderWidth: 1,
        data: [`${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].initial_stock_value.toFixed(2) : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].current_stock_value.toFixed(2) : null) : null}`],
      },
      {
        label: `${this.state.playerTwo ? this.state.playerTwo[0].name : null}`,
        backgroundColor: ["#006D42", "#006D42"],
        borderWidth: 1,
        data: [`${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].initial_stock_value.toFixed(2) : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].current_stock_value.toFixed(2) : null) : null}`],
      }]
    };
var barOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
var lineChartData = {
labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12"],
datasets: [
            {
			label: `${this.state.playerOne ? this.state.playerOne[0].name : null}`,
            data: [`${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_one : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_two : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_three : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_four : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_five : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_six : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_seven : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_eight : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_nine : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_ten : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_eleven : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_twelve : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_thirteen : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_fourteen : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_fifteen : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_sixteen : null) : null}`, `${this.state.playerOne ? (this.state.playerOne[0] ? this.state.playerOne[0].week_seventeen : null) : null}`],
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "pink"
            }, 
            {	
            	label: `${this.state.playerTwo ? this.state.playerTwo[0].name : null}`,
				data: [`${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_one : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_two : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_three : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_four : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_five : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_six : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_seven : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_eight : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_nine : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_ten : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_eleven : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_twelve : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_thirteen : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_fourteen : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_fifteen : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_sixteen : null) : null}`, `${this.state.playerTwo ? (this.state.playerTwo[0] ? this.state.playerTwo[0].week_seventeen : null) : null}`],            	backgroundColor: "rgba(0, 0, 0, 0)",
            	borderColor: "green"
            }
           ]
}
var lineChartOptions = {
    bezierCurve : false,
    datasetFill : false,
    pointDotStrokeWidth: 4,
    scaleShowVerticalLines: false,
    responsive: true
};
const options = this.mapOverAthletes()
return (
<div>
<h1>Compare Two Players</h1>
<Dropdown onChange={this.handleDropDownOne} placeholder='Search for Players' search selection options={options} /><Dropdown onChange={this.handleDropDownTwo} placeholder='Search for Players' search selection options={options} /><br/>
<Button onClick={this.compare} content='Compare' /><br/>
{this.state.playerOne ? `${this.state.playerOne[0].name}: $${this.state.playerOne[0].current_stock_value.toFixed(2)}` : null} <br/>
{this.state.playerTwo ? `${this.state.playerTwo[0].name}: $${this.state.playerTwo[0].current_stock_value.toFixed(2)}` : null}
{this.state.playerOne ? <Line data={lineChartData} options={lineChartOptions} width={1100} height={150} /> : null}
{this.state.playerOne ? <Bar data={barData} options={barOptions}  width={600} height={250} /> : null}
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