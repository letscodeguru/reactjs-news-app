import React, {
    Component
} from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer
} from 'recharts';
import './Home.css';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("https://api.kunalchaudhari.info/intraday/"+this.props.symbol)
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState({ data });
      });
  }


    render() {
        return (
            <LineChart width={600} height={300} data={this.state.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="timestamp" hide="true"/>
           <YAxis  domain={['dataMin - 0.5', 'dataMax + 0.5']}/>
           <CartesianGrid strokeDasharray="3 3" tick="false"/>
           <ReferenceLine y={2.57} stroke="red" strokeDasharray="3 3" />
           <Tooltip/>
           <Line type="monotone" dataKey="open" stroke="#82ca9d" dot={false}  />
          </LineChart>
     
      );
    }
}

export default Home;