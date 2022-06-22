// state in functional Component
import { useState } from "react";
function FunctionalCounter(){
    const [counter,setCounter] = useState(0);
    // useState(0), here counter is initialised to zero(0)
    // setCounter is a function which changes the value of counter
    const increment = () => {
        setCounter(counter+1);
    }
    return (
        <div>
            <h1>Functional Counter : {counter}</h1>
            <button onClick={increment}>Increase</button>
        </div>
    )
}

export default FunctionalCounter;