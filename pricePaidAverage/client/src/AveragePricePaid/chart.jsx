import React from 'react';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // console.log(this.props);
    const occurence = this.props.priceData[0];
    const highlight = this.props.priceData[1];
    const lineDisplay = this.props.priceData[2];
    const id = this.props.priceData[3];

    const divStyle = {
      height: occurence * 4.3 > 120 ? 120 : occurence * 4.3,
      background: highlight ? '#21CE99' : 'black',
    };
    const lineStyle = {
      display: lineDisplay ? 'inline-block' : 'none',
    };
    return (
   <div className = 'priceChartBar' >
    <div className = 'priceChartDiv' style={divStyle}></div>
    <div id='average-line' style={lineStyle}></div>
   </div>
    );
  }
}

export default Chart;
