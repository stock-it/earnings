/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import EarningChart from './earningChart.jsx';

const EarningsChartFrame = props => (
   <div className = 'EPSchart'>
      {Object.keys(props.actQuartile).map(key => <div key={key} className='EPS-price'>${props.actQuartile[key]}</div>)}
    <div className='EPS-dateIndex'>
      {props.earnings.map(earning => <EarningChart key={earning.quarter} earning={earning} actquartile={props.actQuartile} estquartile={props.estQuartile}/>)}
    </div>
   </div>
);

export default EarningsChartFrame;
