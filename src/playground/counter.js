console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
let count =0;
const addone = ()=>{
  count++;
  renderApp();
};

const subone = ()=>{
   count--;
   renderApp();
};

const reset = ()=>{
  count =0;
  renderApp();
 }


const appRoot = document.getElementById('app');


const renderApp = ()=>{
  const templateTwo = (
    <div>
      <p> count:{count} </p>
      <button onClick={addone}>+1</button>
      <button onClick={subone}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderApp();
