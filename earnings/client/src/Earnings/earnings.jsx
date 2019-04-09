/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import EarningsChartFrame from './earningsChartFrame.jsx';
import EarningBottomBar from './earningBottomBar.jsx';
import $ from 'jquery';

class Earnings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      earnings: [],
    };
  }

  componentDidMount() {
    $.get('http://localhost:3002/data/earnings', (Data) => {
    // $.get('//front-end-capstone.herokuapp.com/data/earnings', (Data) => {
      const earningsData = [];
      Data.map(earnings => earningsData.push(earnings));
      this.setState({
        earnings: earningsData,
      });
    });
  }

  render() {
    const earningsData = this.state.earnings;
    const actEarnings = [];
    const estEarnings = [];
    earningsData.sort((a, b) => a.quarterNumber - b.quarterNumber);
    earningsData.forEach(x => actEarnings.push(x.actualEarning));
    let actMax = Math.max(...actEarnings);
    let actMin = Math.min(...actEarnings);
    const actFirstQuartile = (actMin + (actMax - actMin) / 3).toFixed(2);
    const actSecondQuartile = (actMin + (actMax - actMin) / 3 * 2).toFixed(2);
    actMax = actMax.toFixed(2);
    actMin = actMin.toFixed(2);
    const actQuartile = {
      actMax,
      actSecondQuartile,
      actFirstQuartile,
      actMin,
    };
    earningsData.forEach(x => estEarnings.push(x.estimatedEarning));
    let estMax = Math.max(...estEarnings);
    let estMin = Math.min(...estEarnings);
    const estFirstQuartile = (estMin + (estMax - estMin) / 3).toFixed(2);
    const estSecondQuartile = (estMin + (estMax - estMin) / 3 * 2).toFixed(2);
    estMax = estMax.toFixed(2);
    estMin = estMin.toFixed(2);
    const estQuartile = {
      estMax,
      estSecondQuartile,
      estFirstQuartile,
      estMin,
    };
    return (
    <div className="Components">
      <p className='topic'>Earnings</p>
      <div className='line'></div>
      <EarningsChartFrame earnings={earningsData} actQuartile={actQuartile} estQuartile={estQuartile}/>
      <EarningBottomBar/>
    </div>
    );
  }
}

export default Earnings;
