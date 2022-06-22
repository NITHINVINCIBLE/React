import { useState } from "react";
import Child from "./Child";

export default function Parent(){
    const [parentcount,setParentCount]=useState(0);
    const [childcount,setChildCount]=useState(0);

    const changeParentCount = () => {
        setParentCount(parentcount+1);
    }

    const changeChildCount = () => {
        setChildCount(childcount+1);
    }

    return (
        <div>
            This is parent component
            <h1>Parent Count is : {parentcount}</h1>
            <Child childcount={childcount}/>
            <button onClick={changeParentCount}>Increment Parent Count</button>
            <button onClick={changeChildCount}>Increment Child Count</button>
        </div>
    )
}