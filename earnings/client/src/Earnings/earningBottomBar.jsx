import React from 'react';

const EarningBottomBar = () => (
 <div>
   <div className = 'EPS-other'>
   <span id='estimatedCircleExample'></span>
    <p id='Estimated'>Estimated</p>
    <p id='Estimated'>—</p>
  </div>
  <div className = 'EPS-other' id='Actual'>
  <span id='actualCircleExample'>
  </span>
    <p id='Actual'>Actual</p>
    <p id='Actual'>Available Apr 30, After Hours</p>
  </div>
 </div>
);

export default EarningBottomBar;
