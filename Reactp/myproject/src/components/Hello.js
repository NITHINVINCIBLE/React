// function component
/*
function Hello() {
    return <h1>function component output</h1>
}
*/

const x="INCLUDED JS";
const temp = ()=> {
    return "function output"
}

const Hello = () => <h1> using ES6 | {x} | another ex : {temp()}</h1>

export default Hello;