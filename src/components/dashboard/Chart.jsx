import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartdata: {
                labels: [12, 19, 10, 8, 15, 10, 9, 8, 7, 6, 7, 8, 9, 10, 11, 12, 13],
                datasets: [{
                    label: '',
                    data: [12, 19, 10, 8, 15, 10, 9, 8, 13, 6, 19, 8, 14, 11, 18, 12, 15],
                    // backgroundColor: gradient,
                    borderColor: '#5B76F9',
                    borderWidth: 2,
                    zeroLineColor: 'red'
                }]
            },
        }
    }

    state = {  }
    render() { 
        return ( 
            <Line ref="chart" 
                data={this.state.chartdata}
                options={{
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                borderDash: [5],
                                color: '#E8E8E8',
                                zeroLineColor: '#E8E8E8',
                                zeroLineBorderDash: [5],
                                drawBorder: false
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                borderDash: [5],
                                color: '#E8E8E8',
                                zeroLineColor: '#E8E8E8',
                                zeroLineBorderDash: [5],
                                drawBorder: false
                            }
                        }]
                    }
                }}
             />
        );
    }
}
 
export default Chart;