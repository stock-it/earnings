/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import React from 'react';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import PercentageLine from './PercentageLine.jsx';
import $ from 'jquery';

class AnalystChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: [],
    };
  }

  componentDidMount() {
    $.get('http://localhost:3003/data/ratings', (Data) => {
    // $.get('//front-end-capstone.herokuapp.com/data/ratings', (Data) => {
      const ratingsData = [];
      Data.map(ratings => ratingsData.push(ratings.rating));
      this.setState({
        ratings: ratingsData,
      });
    });
  }

  render() {
    let total = 0;
    let buySuggestion = 0;
    let holdSuggestion = 0;
    let buyPercent = 0;
    let holdPercent = 0;
    let sellPercent = 0;
    const ratings = this.state.ratings;

    if (ratings.length > 0) {
      total = ratings.length;
      buySuggestion = ratings.filter(x => x === 'Buy').length;
      holdSuggestion = ratings.filter(x => x === 'Hold').length;
      buyPercent = Math.round(buySuggestion / total * 100);
      holdPercent = Math.round(holdSuggestion / total * 100);
      sellPercent = 100 - buyPercent - holdPercent;
    }

    return (
     <div>
      <div id="percentageChart" >
        <p id="percentageOfRatings">
        <svg width="15" height="15" style= {{ margin: '0 5 0 0' }} viewBox="0 0 20 20"><g fill="#23CE99" transform="translate(-4 -4)"><path id="tag-a" d="M20.99975,8 C20.44775,8 19.99975,7.552 19.99975,7 C19.99975,6.448 20.44775,6 20.99975,6 C21.55175,6 21.99975,6.448 21.99975,7 C21.99975,7.552 21.55175,8 20.99975,8 M21.99975,4 L14.82775,4 C14.29775,4 13.78875,4.21 13.41375,4.585 L4.58575,13.414 C3.80475,14.195 3.80475,15.461 4.58575,16.242 L11.75675,23.414 C12.53775,24.195 13.80475,24.195 14.58575,23.414 L23.41375,14.586 C23.78875,14.211 23.99975,13.702 23.99975,13.172 L23.99975,6 C23.99975,4.896 23.10375,4 21.99975,4"></path></g></svg>
        { buyPercent }%</p>
        <p id="numberOfRatings"> of {total} ratings</p>
      </div>
      <div id="analystSuggestions">
        <div id='buy' >
          <div className='analystSuggestion'>Buy </div>
          <PercentageLine percentage={ buyPercent } class={ 'buyLineFront' }/>
        </div>
        <div id="analystSuggestion" >
          <div className='analystSuggestion'>Hold</div>
          <PercentageLine percentage={ holdPercent } class={ 'analystSuggestionLineFront' }/>
        </div>
        <div id="analystSuggestion" >
          <div className='analystSuggestion'>Sell</div>
          <PercentageLine percentage={ sellPercent } class={ 'analystSuggestionLineFront' }/>
        </div>
      </div>
     </div>
    );
  }
}

export default AnalystChart;
