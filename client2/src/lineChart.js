import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Box} from "@material-ui/core";


export default function Example(props){
    
    let data = props.data
    console.log(data)

    return (
      <Box width="500px" height="500px">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="id" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </Box>
    );

}