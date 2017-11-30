import React from 'react'
import { Line } from 'react-chartjs-2'


class AthleteGraph extends React.Component {


render() {
const filteredPlayer = this.props.nflAthletes.filter(player => player.id === parseInt(window.location.pathname.split('/')[2], 10))
var chartData = {
labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "week 11", "Week 12"],
datasets: [
            {
			label: "Week by Week",
            data: [`${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_one : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_two : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_three : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_four : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_five : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_six : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_seven : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_eight : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_nine : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_ten : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_eleven : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_twelve : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_thirteen : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_fourteen : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_fifteen : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_sixteen : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].week_seventeen : null) : null}`],
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "pink"
            }, 
            {	
            	label: "Projected Season Output",
            	data: [`${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`, `${filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].fantasy_projection : null) : null}`],
            	backgroundColor: "rgba(0, 0, 0, 0)",
            	borderColor: "green"
            }
           ]
}
var chartOptions = {
    bezierCurve : false,
    datasetFill : false,
    pointDotStrokeWidth: 4,
    scaleShowVerticalLines: false,
    responsive: true
};

var styles = {
    "graphContainer" : {
        "backgroundColor" : '#fff',
        "borderColor" : "green",
        "height" : "235px",
        "width" : "1150px",
        "marginTop" : "15px",
        "padding" : "20px"
    }
};

	return (
            <div>
            <h1>{filteredPlayer ? (filteredPlayer[0] ? filteredPlayer[0].name : null) : null}'s Week by Week Statistics vs. Projected Season Output</h1>
                <div style={styles.graphContainer}>
                    <Line data={chartData} options={chartOptions} width={1100} height={150} />
                </div>
            </div>

	)
}
}

export default AthleteGraph