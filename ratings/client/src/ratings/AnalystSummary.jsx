/* eslint-disable max-len */
import React from 'react';

class AnalystSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyReadMore: false,
      sellReadMore: false,
    };
  }

  showMore(e) {
    this.setState({
      [e.target.id]: !this.state[e.target.id],
    });
  }

  render() {
    const buyShowMore = {
      display: this.state.buyReadMore ? 'inline' : 'none',
    };

    const sellShowMore = {
      display: this.state.sellReadMore ? 'inline' : 'none',
    };

    return (
     <div id = 'analystSummaries'>
      <div className = 'analystSummary' id = 'buySummary'>
       <p className = 'summaryTitle'>Buy Summary</p>
       <p className = 'summaryQuotationMark'>"</p>
       <p className = 'summaryMessage'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ornare arcu at mattis. </p>
       <div style = {buyShowMore}>
        <p>Nullam eget eleifend dolor, vitae commodo lectus. Quisque accumsan diam et nunc varius, sit amet malesuada mauris sollicitudin.</p>
        <p>Nunc posuere fringilla facilisis. Aenean imperdiet metus sit amet risus finibus, ut sodales justo blandit. Nunc nisl ante, suscipit a feugiat ut, hendrerit sit amet turpis. Duis volutpat tempus auctor. Maecenas suscipit hendrerit ultricies. Aenean tempus ultrices posuere. Fusce condimentum accumsan leo et vehicula. Cras lacus risus, sollicitudin."</p>
       </div>
       <p className='readMore' id = 'buyReadMore' onClick = {this.showMore.bind(this)}>{this.state.buyReadMore ? 'Read Less' : 'Read More'}</p>
       <p className = 'analystCompany'>Morning Star</p>
      </div>
      <div className = 'analystSummary' id = 'sellSummary'>
       <p className = 'summaryTitle'>Sell Summary</p>
       <p className = 'summaryQuotationMark'>"</p>
       <p className = 'summaryMessage'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ornare arcu at mattis. </p>
       <div style = {sellShowMore}>
        <p>Nullam eget eleifend dolor, vitae commodo lectus. Quisque accumsan diam et nunc varius, sit amet malesuada mauris sollicitudin.</p>
        <p>Nunc posuere fringilla facilisis. Aenean imperdiet metus sit amet risus finibus, ut sodales justo blandit. Nunc nisl ante, suscipit a feugiat ut, hendrerit sit amet turpis. Duis volutpat tempus auctor. Maecenas suscipit hendrerit ultricies. Aenean tempus ultrices posuere. Fusce condimentum accumsan leo et vehicula. Cras lacus risus, sollicitudin."</p>
       </div>
       <p className='readMore' id = 'sellReadMore' onClick = {this.showMore.bind(this)}>{this.state.sellReadMore ? 'Read Less' : 'Read More'}</p>
       <p className = 'analystCompany'>Morning Star</p>
      </div>
     </div>
    );
  }
}

export default AnalystSummary;
