import React from 'react'
import  './Child.css';

//for naming conventions I should be using "Props" but instead im using options.

const Child = (options)=> {
  return (
    <div className='childC'>
      <img
        src={options.icon}
        alt=''
        style={{ height: '40px', width: '60px', marginTop:'35px', marginLeft:'40px' }}
      />
      <h2 style={{color:'white'}}>{options.headline}</h2>
      <p style={{width:'200px'}}>{options.description}</p>
      <button>{options.btnText}</button>
    </div>
  );
};

export default Child;
