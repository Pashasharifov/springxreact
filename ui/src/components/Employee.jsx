import React from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "./service/EmployeeService";
const Employee = ({employee, deleteEmployee}) => {
    const navigate = useNavigate();
    const editEmployee = (e, id) => {
            e.preventDefault();
            navigate("/editEmployee/" + id)
            // EmployeeService.updateEmployee(id).then(res => {
            //     if(employees){
            //         setEmployees(prevElem => {
            //             return prevElem.filter(employee => employee.id !== id)
            //         })
            //     }
            // })
        }
    return (
        <tr>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{employee.firstName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{employee.lastName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{employee.email}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <a onClick={(e, id) => editEmployee(e, employee.id)} className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Edit</a>
                <a onClick={(e, id) => deleteEmployee(e, employee.id)} className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Delete</a>
            </td>
        </tr>
    );
}
export default Employee;