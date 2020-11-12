import React from 'react';

const Option = (props)=>{
  return (
    <div>
      <div className='option'> 
      <p className='option__text'>
      {props.optionText} </p>
      <button
        className='button button--link'
        onClick={ (e)=>{
          props.handleRemove(props.optionText)
        }
      }
        >
          remove
      </button>
       </div>
    
    </div>
  );
};

export default Option;
