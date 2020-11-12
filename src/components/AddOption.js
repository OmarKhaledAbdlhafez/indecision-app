import React from 'react';

export default class AddOption extends React.Component {
  
  state = {
      error :undefined
    }
  handleAddOption =(e)=> {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error =this.props.handleadd(option);
    e.target.elements.option.value=' ';

    if (error) {
      this.setState(()=>{
        return {
          error
        }
      });
    }
    else {
      this.setState(()=>{
        return {
          error: undefined
        }
      });
    }
  } 
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
         {this.state.error && <p>{this.state.error}</p>}
          <input type="text" name="option" />
          <button className='button'>Add Option</button>
        </form>
      </div>
    );
  }
}
