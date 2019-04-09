import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
const colorBreakPoint = 3000;

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    render() {
        const { min, max } = data.reduce((result, dataPoint) => ({
            min: (dataPoint.pv < result.min || result.min === 0) ? dataPoint.pv : result.min,
            max: (dataPoint.pv > result.max || result.max === 0) ? dataPoint.pv : result.max,
        }), { min: 0, max: 0 });
        const colorBreakPointPercentage = `${(1 - ((colorBreakPoint - min) / (max - min))) * 100}%`;

        return (
                    <LineChart width={300} height={100} data={data}>
                        <defs>
                            <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="green" />
                                <stop offset={colorBreakPointPercentage} stopColor="green" />
                                <stop offset={colorBreakPointPercentage} stopColor="red" />
                                <stop offset={colorBreakPointPercentage} stopColor="yellow" />
                                <stop offset="100%" stopColor="red" />
                            </linearGradient>
                        </defs>
                        <Line type='monotone' dataKey='pv' stroke='url(#colorUv)' strokeWidth={2} dot={false} activeDot={false} />
                        <Tooltip />
                    </LineChart>
        )
    }
}
