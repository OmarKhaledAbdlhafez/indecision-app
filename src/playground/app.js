class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.delete= this.delete.bind(this);
    this.pick = this.pick.bind(this);
    this.add = this.add.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.state= {
      options:[]
    };
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
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  delete(){
    this.setState(()=>{
      return {
        options :[]
      }

    });
  }
  pick(){
    const rand = Math.floor(Math.random() * this.state.options.length);
    const choice = this.state.options[rand]
    alert(choice)

  }
  add(option){
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

  deleteOption(op){
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => op !== option)
    }));
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          visable={this.state.options.length >0}
          handlePick ={this.pick}
         />
        <Options 
          options={this.state.options}
          handleRemoveAll ={this.delete}
          handleRemoveOption= {this.deleteOption}
         />
        <AddOption 
          options={this.state.options} 
          handleadd ={this.add}
          />
      </div>
    );
  }
}

const Header = (props)=>{
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

/* class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
} */

const Action =(props)=>{
  return (
    <div>
      <button 
      onClick={props.handlePick}
      disabled={!props.visable}
      >
        What should I do?
        </button>
    </div>
  );

}
/* 
class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
        onClick={this.props.handlePick}
        disabled={!this.props.visable}
        >
          What should I do?
          </button>
      </div>
    );
  }
} */

const Options = (props)=>{
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove All</button>
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
}
/*
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}
*/

const Option =(props)=>{
  return (
    <div>
      {props.optionText}
      <button
        onClick={ (e)=>{
          props.handleRemove(props.optionText)
        }
      }
        >
          remove
      </button>
    </div>
  );
}

/* class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
} */

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error :undefined
    };
  }
  handleAddOption(e) {
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
  } 
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
         {this.state.error && <p>{this.state.error}</p>}
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
