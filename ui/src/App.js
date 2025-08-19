import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';
import UpdateEmployee from './components/UpdateEmployee';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<EmployeeList></EmployeeList>}></Route>
          <Route path='/' element={<EmployeeList></EmployeeList>}></Route>
          <Route path='/employeeList' element={<EmployeeList></EmployeeList>}></Route>
          <Route path='/addEmployee' element={<AddEmployee/>}></Route>
          <Route path='/editEmployee/:id' element={<UpdateEmployee/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
