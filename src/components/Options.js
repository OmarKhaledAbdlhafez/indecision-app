import React from 'react';
import Option from './Option';

const Options = (props)=>{
  return (
    <div>
      <div className='widget-header'>
      <h3 className='widget-header__title'>your options </h3>
      <button
        className='button button--link'
       onClick={props.handleRemoveAll}>Remove All</button>
      </div>
      {
        props.options.map((option) => 
        <Option 
          key={option} 
          optionText={option}
          handleRemove ={props.handleRemoveOption} 
        />
      )
      }
    </div>
  );
};

export default Options;
