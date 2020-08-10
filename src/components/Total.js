import React from 'react';
import { connect } from 'react-redux'

const Total = props => {
  
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
      {console.log('this is from total', props.car.price,props.additionalPrice)}
    </div>
  );
};

export default connect(null,{})(Total)
