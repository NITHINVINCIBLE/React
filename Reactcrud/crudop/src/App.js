import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import EmployeesList from "./components/EmployeesList";
import NotFound from "./components/NotFound";
function App(){
  return(
    <Router>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<EmployeesList/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;