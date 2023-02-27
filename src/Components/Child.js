import React from 'react'
import  './Child.css';






const choices = (props)=> {
  return (
    <div className='childC'>
      <img src={props.icon} alt='' />
      <h2>{props.headline}</h2>
      <p>{props.description}</p>
      <button>{props.btnText}</button>
    </div>
  );
}

export default Child;
//  {
//    choices.map((preview) => (
//      <div key={preview.id}>
//        <h2>{preview.headline}</h2>
//        <p style={{ fontSize: '16px' }}>{preview.description}</p>
//        <button>{preview.button}</button>
//      </div>
//    ));
//  }