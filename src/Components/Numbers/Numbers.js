import React from 'react';
import '../../main.css';

function Number(props) {
  return(
    <div className="numbers">
      {props.number}
    </div>
  )
}
export default Number;