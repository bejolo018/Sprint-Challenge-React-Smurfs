import React from 'react';
import './Smurf.css';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <h4>{props.age} smurf years old</h4>
      <p className='height'>{props.height} tall</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

