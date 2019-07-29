import React from 'react';
import './Validation.css';

const validation = (props) => {
  let longEnough = (props.textLength >= 5)
  let validationMessage = (longEnough) ? 'Text long enough (' + props.textLength + ')' :
    'Text too short (' + props.textLength + ')';

  return (
    <div className={"Validation " + (longEnough ? 'good' : 'warning')}>
      <p>{validationMessage}</p>
    </div>

  )
}

export default validation;