/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React from 'react';
import AnalystChart from './AnalystChart.jsx';
import AnalystSummary from './AnalystSummary.jsx';

class AnalystRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { ratings } = this.props;
    return (
      <div className="Components">
        <p className='topic'>Analyst Ratings</p>
        <div className='line'></div>
        <AnalystChart ratings={ratings}/>
        <AnalystSummary/>
      </div>
    );
  }
}

export default AnalystRating;
