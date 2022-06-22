import React,{useState} from 'react'
const Input = (props) => {

    const [name,setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.func(name)
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Input;