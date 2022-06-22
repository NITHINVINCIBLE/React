const Print = ({obj}) => {
    // console.log("inside print file "+ props.ans);
    
//     const res = props.ans.map( (x) => 
//     <h1 key={x.movieId}>
//     {x.movieId} 
//     {x.movieName}
//     {x.gross}
// </h1>
    
    return(
        <div>
            <table className="table table-striped">
                    <tbody>
                        {
                                <tr key= {obj.movieId}>
                                    <td>{obj.movieId}</td>
                                    <td>{obj.movieName}</td>
                                    <td>{obj.maleLead}</td>
                                    <td>{obj.femaleLead}</td>
                                    <td>{obj.gross}</td>
                                </tr>
                            
                        }
                    </tbody>
            </table> 
           {/* {props.obj} */}
        </div>    
    )
}

export default Print;