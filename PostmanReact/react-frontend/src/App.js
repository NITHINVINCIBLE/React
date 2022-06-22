// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import Print from './components/Print';
function App() {
  const [res,setResult] = useState([])
  const printFunc = (ans) => {
    console.log("usercomponent " + {ans})
    setResult( ans )
}
  return (
    <div className="App">
      <UserComponent func={printFunc}/>
      <Print obj={res}/>
      
    </div>
  );
}

export default App;
