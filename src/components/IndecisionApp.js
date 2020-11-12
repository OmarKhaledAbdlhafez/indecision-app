import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state= {
      options:[],
      selectOption :undefined
    };
  delete =()=> {
    this.setState(()=>{
      return {
        options :[]
      }

    });
  }
  pick =()=>{
    const rand = Math.floor(Math.random() * this.state.options.length);
    const choice = this.state.options[rand]
    this.setState(()=>{
      return {
        selectOption:choice
      }

    });
}
handleModal =()=>{
  this.setState(()=>{
    return {
      selectOption:undefined
    }

  });
}
  add=(option)=>{
    if (!option){
      return "enter a valid option ";
    }
    else if ( this.state.options.indexOf(option) > -1 ){
      return "this option already exist "

    }
    this.setState((prevState)=>{
      return {
        options: prevState.options.concat([option])
      }
    });

  }

  deleteOption =(op) =>{
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => op !== option)
    }));
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className='container'>
        <Action
          visable={this.state.options.length >0}
          handlePick ={this.pick}
         />
         
       <div className='widget'>
       <Options 
          options={this.state.options}
          handleRemoveAll ={this.delete}
          handleRemoveOption= {this.deleteOption}
         />
       </div>
        <AddOption 
          options={this.state.options} 
          handleadd ={this.add}
          />
          <OptionModal
          selectOption={this.state.selectOption}
          handleModal={this.handleModal}
          />
          </div>
      </div>
    );
  }
}