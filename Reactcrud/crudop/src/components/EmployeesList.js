import {useEffect,useState} from "react";
import employeeService from "../services/employee.service";
import 'bootstrap/dist/css/bootstrap.min.css';


const EmployeesList = () => {

  const [employees,setEmployees] = useState([]);
  // useEffect( () => {
  //   employeeService.getAll()
  //   .then( response => {
  //     console.log("Printing employees",response.data);
  //     setEmployees(response.data);
  //   })
  //   .catch(error=>{
  //     console.log('error has occured',error);
  //   })
  // },[])
  

  const init = () => {
    employeeService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  return ( 
    <div className="container">
      <h1>List of Employees</h1>
      <hr/>
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>EmpID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>City</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((x) => (
                <tr key={x.empId}>
                  <td>{x.empId}</td>
                  <td>{x.lastName}</td>
                  <td>{x.firstName}</td>
                  <td>{x.city}</td>
                  <td>{x.salary}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
   );
}
 
export default EmployeesList;