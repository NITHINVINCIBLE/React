// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello.js';
import Message from './components/Message.js';
import Profile from './components/Profile.js';
import Counter from './components/Counter.js';
import FunctionEvent from './components/FunctionEvent';
import FunctionalCounter from './components/FunctionalCounter';
import Product from './components/Product';
import Form from './components/Form';
import Todo from './components/Todo';
import InlineComponent from './components/InlineComponent';
import ModuleComponent from './components/ModuleComponent';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Nithin SAI
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

       {/* functional component */}
      <Hello/>

      {/* class component and props*/}
      <Message eid="20" ename="wayne"/>

       {/* props */}
      <Profile roll="100" branch="CSE" >
        <h3>using children</h3>
      </Profile>

      {/* state class component */}
      <Counter />
      <br/>

      <FunctionEvent />
      <br/>

      {/* state functional component */}
      <FunctionalCounter />

      {/* List Rendering */}
      <Product />
      <br/>
      
      {/* Form */}
      <Form />
      <br/>
      
      {/* Todo */}
      <Todo></Todo>
      <br/>

      {/* InlineComponent */}
      <InlineComponent />

      {/* module component */}
      <ModuleComponent />
    </div>
  );
}

export default App;
