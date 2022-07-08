import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props)=>{
    const maxDatPoints = props.dataPoints.map(dataPoint=>dataPoint.value);
    const maximumValue=Math.max(...maxDatPoints);
    return (
        <div className='chart'>
        {props.dataPoints.map((dataPoint)=>(
            <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maximumValue}
            label={dataPoint.label}
            />
        ))}
        </div>
    )
}

export default Chart;