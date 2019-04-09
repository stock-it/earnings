/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const PercentageLine = props => (
 <div className='analystSuggestionPercentage'>
  <div className={props.class} style={{ width: 400 * props.percentage / 100 }}></div>
  <div className='analystSuggestionLineEnd'>
   <span className = 'suggestionPercentage' className={props.class}>{props.percentage}%</span>
   <div className = 'analystSuggestionLineEndBackground' id={props.class} style={{ width: 400 * (1 - props.percentage / 100) }}></div>
  </div>
 </div>
);

export default PercentageLine;
