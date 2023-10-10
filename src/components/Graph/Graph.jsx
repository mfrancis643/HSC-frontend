import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';



const Graph = ({labels, dataset, header = 'Bank Balance'}) => {


    const graphData = {
        labels: labels,
        datasets: [
            {
                label: header,
                backgroundColor: '#85BB65',
                borderColor: '#85BB65',
                borderWidth: 2,
                data: dataset
            }
        ]
    }

    return (
        <div>
            <Line
                data={graphData}
                options={{
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    );
}

export default Graph;
