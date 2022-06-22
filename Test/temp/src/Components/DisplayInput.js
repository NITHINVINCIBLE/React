import { browserName, browserVersion } from "react-device-detect";
import {useEffect} from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const DisplayInput = () => {
    
    // useEffect(()=> {
    //     func();
    //     } ,[])

    // const func =() => {
    //     console.log(browserName);
    //     if(browserName === "Chrome") {
    //         style="background-color:rgb(232, 51, 48);"
    //     }
    //     else {
    //         style="background-color:rgb(200, 41, 300);"
    //     }
    // }

    return(
        <div>
            {/* <div className={(browserName === "Chrome") ? (style = "background-color:red") : (style = "background-color:red")} />
             */}
            
            {/* <div
                style={{
                    backgroundColor: (browserName === "Chrome") ? 'red' : 'blue',
                }}
            /> */}
            nithin sai
            <div className={(browserName === "Chrome")? 'background-red' : 'background-blue'} />

        </div>
    )
}
export default DisplayInput;