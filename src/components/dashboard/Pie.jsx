import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'

class PieChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                "labels":["Salary","Travel","Yellow","Red","Green"],
                "datasets":[{
                    "label":"My First Dataset",
                    "data":[300,150,100,100,200,300],
                    "backgroundColor":[
                        "#5B76F9",
                        "#33D69F",
                        "#33D067",
                        "#35C3FC",
                        "#5B76F9",
                        "#F76552"
                    ]
                }]
            }
        }
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <Doughnut data={this.state.data} options={{
                    legend: {
                        display: false,
                    }
                }} />
            </React.Fragment>
        );
    }
}
 
export default PieChart;