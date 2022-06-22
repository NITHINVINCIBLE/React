// event handling in functional Component
// inside onClick,opening and closing brackets for handleClick should not be used
function FunctionEvent(){
    function handleClick(){
        console.log("Button is clicked");
    }
    return (
        <div>
            Functional Component
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default FunctionEvent;