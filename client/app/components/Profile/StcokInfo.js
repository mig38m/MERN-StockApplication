import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts'

import React from 'react';

export default class extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const {
      data
    } = this.props
    const ticker = data['Meta Data']['2. Symbol'];
    const lastRefreshed = data["Meta Data"]["3. Last Refreshed"];
    const timezone = data["Meta Data"]["5. Time Zone"];
    const timeSeries = data['Time Series (Daily)'];
    const rows = [];

    //key is date
    for(var key in timeSeries){
      if(timeSeries[key]){
        const finData = timeSeries[key];
        const open = parseFloat(finData["1. open"]);
        const high = parseFloat(finData["2. high"]);
        const low = parseFloat(finData["3. low"]);
        const close = parseFloat(finData["4. close"]);
        const volume = parseFloat(finData["5. volume"]);

        rows.push({
          date: key,
          open,
          high,
          low,
          close,
          volume
        });
      }
    }
    console.log(rows)
    return(
      <div>
        <p>{ticker}</p>
        <p>{lastRefreshed}</p>
        <p>{timezone}</p>
        <br />

        <LineChart width={600} height={300} data={rows}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="date"/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="open" stroke="#8884d8" dot={false}/>
              <Line type="monotone" dataKey="high" stroke="#82ca9d" dot={false}/>
              <Line type="monotone" dataKey="low" stroke="#B4045F" dot={false}/>
              <Line type="monotone" dataKey="close" stroke="#868A08" dot={false}/>
      </LineChart>
      </div>
    );
  }
} 
