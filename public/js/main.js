// START chart one (transactions)
var ctx = document.getElementById('myChart').getContext('2d'),
    gradient = ctx.createLinearGradient(0, 0, 0, 450);

    gradient.addColorStop(0, 'rgba(91,118,249,0.2)');
    gradient.addColorStop(.5, 'rgba(91,118,249,.1)');
    gradient.addColorStop(1, 'rgba(91,118,249,0)');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [12, 19, 10, 8, 15, 10, 9, 8, 7, 6, 7, 8, 9, 10, 11, 12, 13],
        datasets: [{
            label: '',
            data: [12, 19, 10, 8, 15, 10, 9, 8, 13, 6, 19, 8, 14, 11, 18, 12, 15],
            // backgroundColor: [
            //     '#2B9A9C',
            //     '#2B9A9C',
            //     '#2B9A9C',
            //     '#2B9A9C',
            //     '#2B9A9C',
            //     '#2B9A9C'
            // ],
            backgroundColor: gradient,
            borderColor: '#5B76F9',
            borderWidth: 2,
            zeroLineColor: 'red'
        }]
    },
    options: {
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
    }
});
// END chart one

// START chart 2 (total sales)
var ctx2 = document.getElementById('myChart2').getContext('2d');
var myDoughnutChart = new Chart(ctx2, {
    type: 'doughnut',
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
    },
    options: {
        legend: {
            display: false,
        }
    }
});
// END chart 2 (total sales)