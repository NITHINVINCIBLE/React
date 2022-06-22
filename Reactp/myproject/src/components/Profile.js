// functional component props
function Profile(props){
    // destructuring
    const { roll,branch } = props;
    // or props.roll and props.branch
    // props is not a keyword | children is a keyword
    return (
    <h1>
            Roll Number : {roll} | Branch : {branch}
            {props.children}
    </h1>
    )
}

export default Profile;