import "./style.css";
const header = {
    color:"green",
    fontSize : "33px",
};
export default function InlineComponent(){
    return(
        <div>
            <h1 style={header}>This is inline component</h1>
            <h1 className="testcolor">This is style sheet component</h1>
        </div>
    );
}