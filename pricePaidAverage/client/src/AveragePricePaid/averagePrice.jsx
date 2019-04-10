/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Chart from './chart.jsx';
import $ from 'jquery';

class AveragePrice extends React.Component {
  constructor() {
    super();
    this.state = {
      price: [],
    };
  }

  componentDidMount() {
    $.get('http://localhost:3001/data/stocks', (stockData) => {
    // $.get('//front-end-capstone.herokuapp.com/data/stocks', (stockData) => {
      const priceData = [];
      stockData.map(stock => priceData.push(stock.price));
      this.setState({
        price: priceData,
      });
    });
  }

  render() {
    const arr = this.state.price;
    const highest = Math.max(...this.state.price);
    const lowest = Math.min(...this.state.price);
    const range = highest - lowest;
    const barRange = (range) / 33;
    const currentPrice = this.state.price[this.state.price.length - 1];
    const averagePrice = (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2);
    let averagePriceDistance = 0;
    let percentage = 0;
    let compare = '';
    const currentSpot = Math.floor((currentPrice - lowest) / barRange);
    const averageSpot = Math.floor((averagePrice - lowest) / barRange);
    const sortPriceData = arr.slice(0).sort((a, b) => a - b);
    const allData = [];
    for (let i = 0; i < 33; i += 1) {
      const tempLow = lowest + barRange * i;
      const tempHigh = lowest + barRange * (i + 1);
      let highLight = false;
      let averageLine = false;
      const occurence = sortPriceData.filter(price => price >= tempLow && price <= tempHigh).length;
      (averagePrice < tempLow - barRange && tempHigh - barRange <= currentPrice) || (averagePrice > tempLow - barRange && tempHigh >= currentPrice)
        ? highLight = true : null;
      i === currentSpot ? averageLine = true : null;
      allData.push([occurence, highLight, averageLine]);
    }

    // find the spot for current price
    const currentPriceDistance = currentSpot * 20.3 + 9.3;
    // find the spot for average price
    if (averagePrice > currentPrice) {
      averagePriceDistance = averageSpot * 20.3 + 9.3;
    } else {
      averagePriceDistance = averageSpot * 20.3 + 14;
    }

    percentage = Math.floor((currentPrice / averagePrice - 1) * 100);
    // Percentage that compare between current Price and average Price
    if (percentage >= 0) {
      compare = `${percentage}% Higher`;
    } else {
      compare = `${Math.abs(percentage)}% Lower`;
    }
    return (
  <div className="Components">
   <p className='topic'>Price Paid on Robinhood</p>
   <div className='line'></div>
   <div id = 'compare'>
    <div style={{ position: 'absolute', left: currentPriceDistance - 7 < 0 ? 0 : currentPriceDistance - 7 }}>
      <p id = 'compare'>{compare}</p>
      <p id = 'rightNow'>Right Now</p>
    </div>
   </div>
   <div id = 'chart' >
    {allData.map(priceData => <Chart priceData = {priceData} />)}
   </div>
   <div className='bottomLine'>
    <span id = 'bottomFrontLine' style={{ width: currentPriceDistance }}></span>
    <span id = 'circle' ></span>
    <span id = 'bottomRareLine' style={{ width: 676 - currentPriceDistance }}></span>
   </div>

    <div style={{ display: 'inline-block' }}>
      <div id = 'lowest'>52 Week Low
      <p id='lowest'>${lowest}</p></div>
      <div id = 'averagePricePaid' style={{ left: averagePriceDistance + 12 }}>
        <p className='averagePricePaid'>Average Price Paid</p>
        <p className='averagePricePaid' id='averagePricePaid'>${averagePrice}</p>
      </div>
      <div id = 'highest'>52 Week High
      <p id='highest'>${highest}</p></div>
    </div>
  </div>
    );
  }
}

export default AveragePrice;
