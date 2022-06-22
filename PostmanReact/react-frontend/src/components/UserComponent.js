import React from "react";
import UserService from "../services/UserService";
import SearchComponent from "./SearchComponent"
class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            users:[]
            // res:{},
        }
    }

    componentDidMount(){
        UserService.getInfo().then((response) => {
            this.setState({users:response.data})
        })
    }

    render(){
        return (
            <div>
                <h1 className="text-centre">Movies List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>MovieId</td>
                            <td>MovieName</td>
                            <td>MaleLead</td>
                            <td>FemaleLead</td>
                            <td>Gross</td>
                        </tr>
                    </thead>

                    {/* console.log({this.state.users}) */}

                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key= {user.movieId}>
                                    <td>{user.movieId}</td>
                                    <td>{user.movieName}</td>
                                    <td>{user.maleLead}</td>
                                    <td>{user.femaleLead}</td>
                                    <td>{user.gross}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

                {/* <div>{
                    this.state.users.map((x) => 
                    <h2>{x.movieId}</h2>
                    )
                }
                </div> */}

                <SearchComponent list={this.state.users} func={this.props.func}/>
                {/* {this.state.res} */}

            </div>
        )
    }
}

export default UserComponent;   