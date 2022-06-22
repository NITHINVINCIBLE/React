
import './App.css';
import Form from './Form';

import { useState } from 'react';

export default function App(){

  const [print,setPrint] = useState("")
   const getData = (name) => {
     console.log(name);
      setPrint(name);
   }

    
    return (
      // <h1>nithin sai</h1>
      <div>
        <Form func={getData}/>
      
        {/* <Getdata name={func}/> */}
        <h1>{print}</h1>
      </div>
      
    )
}