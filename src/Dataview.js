import React, { Component } from 'react';
// import d3 from 'd3';
// import rd3 from 'react-d3';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell} from 'recharts';

// const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell} = Recharts;
// const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

const timeline = [
    {time: "Hour"},
    {time: "Day"},
    {time: "7 Days"},
    {time: "30 Days"}
];


let data=[];

const pieColors = ['#418cef', '#41bcef', '#41efb8', '#41ef62'];//, '#e9ef41'


const RADIAN = Math.PI / 180;                    

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy-10} dy={8} textAnchor="middle" fill={fill} style={{fontWeight: 800}}>{payload.label}</text>
      <text x={cx} y={cy+15} dy={8} textAnchor="middle" fill="#333" style={{fontWeight: 600, fontSize:'20px'}}>{`${value}%`}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      {/*<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>*/}
      {/*<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>*/}
      {/*<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}%`}</text>*/}
      {/*<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>*/}
    </g>
  );
};



class TimelineDrop extends React.Component{
    render(){
        return(
            <select>
                {timeline.map((option, key) => <option key={key}>{option.time}</option>)}
            </select>
        )
    }
}
class BarGraph extends React.Component{
    constructor(props){
        super(props);
    }
   render(){
        return(
            <div className="BarGraph">
                <h4>PAGE VIEWS</h4>
                	<ResponsiveContainer>
                    <BarChart  data={this.props.barData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       {/*<Tooltip/>
       <Legend />*/}
       <Bar dataKey="pv" fill="#418cf0" />
       {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
      </BarChart>  
      </ResponsiveContainer>            
                   {/*<BarChart
                    data = {barData}
                    width={100}
                    height={400}
                    radius={80}
                 />*/}
                </div>
        )
    }
}

class PieGraph extends React.Component{
    constructor(props){
        super(props);
        this.state = {activeIndex: 0};
        this.onPieEnter = this.onPieEnter.bind(this);
        data = this.props.pieData;
    }

  onPieEnter(data, index) {
      this.setState({
       activeIndex: index,
      });
  }
    render(){
        return(
            <div className="PieGraph">
                <h4>MOST POPULAR TOPICS</h4>
                <ResponsiveContainer>
                    <PieChart 
                     onMouseEnter={this.onPieEnter}> 
                    <Pie 
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape} 
                    data={this.props.pieData} 
                    innerRadius={70}
                    fill="#418cf0">
                        {
                        data.map((entry, index) => <Cell key={index} fill={pieColors[index % pieColors.length]}/>)
                        }
                    </Pie>
               </PieChart>
               </ResponsiveContainer>
            </div>
        )
    }
}

class Dataview extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="dataview section-container oline">
                <h2>Data for the last <TimelineDrop></TimelineDrop></h2>
                <div className="flexsession">
                    <div className="datapoint">
                        <label>Total Nb Pages viewed:</label>
                    </div>
                    <div className="datapoint">
                        <label>Total Nb Sessions:</label>
                    </div>
                    <div className="datapoint">
                        <label>Average Session Length:</label>
                    </div>
                    <div className="datapoint">
                        <label>Number of Devices used to login:</label>
                    </div>
                </div>
                <div className="flexsession">
                    <BarGraph barData={this.props.userlist[this.props.user].graphs[0].barData}></BarGraph>
                    <PieGraph pieData={this.props.userlist[this.props.user].graphs[0].pieData}></PieGraph>
                </div>
            </div>
        );
    }    
}

export default Dataview;
