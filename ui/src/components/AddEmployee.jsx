import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "./service/EmployeeService";

const AddEmployee = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
    });
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
    }
    const save = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
            .then(response => {
                console.log(response);
                navigate("/employeeList");
            })
            .catch(error => {
                console.log(error)
            })
    }
    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            email: "",
        })
    }
    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8 font-thin text-2xl tracking-wider">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Add New Employee</h1>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">First Name</label>
                    <input type="text" name="firstName" className="h-10 w-96 border mt-2 px-2 py-2" 
                        value={employee.firstName} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                     <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                    <input type="text" name="lastName" className="h-10 w-96 border mt-2 px-2 py-2" 
                        value={employee.lastName} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Email</label>
                    <input type="email" name="email" className="h-10 w-96 border mt-2 px-2 py-2" 
                        value={employee.email} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <button onClick={save} className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">Save</button>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <button onClick={reset} className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">Reset</button>
                </div>

            </div>
        </div>
    );
}
export default AddEmployee;