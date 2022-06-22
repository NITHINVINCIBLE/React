import React from "react";
function Child({childcount}){
    console.log("child is rerendered");
    return (
        <div>
            This is Child component
            <h2>Child count value is : {childcount}</h2>
        </div>
    )
}

export default React.memo(Child);