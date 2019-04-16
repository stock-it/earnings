import React from 'react';
import EarningChart from './earningChart.jsx';

const EarningsChartFrame = props => (
   <div className = 'EPSchart'>
      {Object.keys(props.actQrt).map(key => 
      <div key={key} className='EPS-price'>${props.actQrt[key]}</div>)}
    <div className='EPS-dateIndex'>
      {props.earnings.map(earning => 
      <EarningChart key={earning.quarter} earning={earning} actQrt={props.actQrt} estQrt={props.estQrt}/>)}
    </div>
   </div>
);

export default EarningsChartFrame;
