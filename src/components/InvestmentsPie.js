import React from 'react'
import { Pie } from 'react-chartjs-2'



class InvestmentsPie extends React.Component {

getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

handleLabel = () => {
const investName = this.props.investments.map(investment => investment.nfl_athlete.name)
const investAmount = this.props.investments.map(investment => parseFloat((investment.quantity * investment.nfl_athlete.current_stock_value).toFixed(2), 10))
const netTotalInvested = (investAmount.length ? investAmount.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue
	}) : null)
const chartData = {
	labels: ["Available Budget"],
	datasets: [
	{data: [`${this.props.investments ? (this.props.investments[0] ? this.props.investments[0].user.budget.toFixed(2) : null) : null}`],
	backgroundColor: [],
	hoverBackgroundColor: []
	}]
	}
const chartOptions = {
	animation: {
		animateScale: true
	}
}
for (let i = 0; i < investName.length; i++) {
	chartData.labels.push(investName[i])
}
for (let i = 0; i < investAmount.length; i++) {
	chartData.datasets[0].data.push(investAmount[i])
}
for (let i = 0; i < 500; i++) {
	chartData.datasets[0].backgroundColor.push(this.getRandomColor())
}
for (let i = 0; i < 500; i++) {
	chartData.datasets[0].hoverBackgroundColor.push(this.getRandomColor())
}


return {chartData, chartOptions, netTotalInvested}
}

render() {
const dataOrOption = this.handleLabel()
return (
<div>
<h3>Total Assets: ${this.props.investments ? (this.props.investments[0] ? (dataOrOption.netTotalInvested + this.props.investments[0].user.budget).toFixed(2) : null) : null}</h3>
<Pie data={dataOrOption.chartData} options={dataOrOption.chartOptions} width={600} height={250} />	

</div>


	)
}
}


export default InvestmentsPie

// var chartData = {
// labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
// datasets: [
//             {
// 			label: "Week by Week",
//             data: [`${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_one : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_two : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_three : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_four : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_five : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_six : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_seven : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_eight : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_nine : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_ten : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_eleven : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_twelve : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_thirteen : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_fourteen : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_fifteen : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_sixteen : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_seventeen : null) : null}`],
//             backgroundColor: "rgba(0, 0, 0, 0)",
//             borderColor: "pink"
//             }, 
//             {	
//             	label: "Projected Season Output",
//             	data: [`${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`],
//             	backgroundColor: "rgba(0, 0, 0, 0)",
//             	borderColor: "green"
//             }
//            ]
// }