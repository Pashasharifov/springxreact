import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "./service/EmployeeService";

const UpdateEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        email: ""
    })
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value })
    }
    useEffect(() => {
        let mounted = true;
        const fetchData = async () => {
            try {
                const response = await EmployeeService.getEmployeeById(employee.id);
                if (mounted) {
                    setEmployee(response.data);
                }
            } catch (error) {
                if (mounted) {
                    console.log(error)
                }
            }
        };
        fetchData();
        return () => {
            mounted = false;
        }
    }, [id])
    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            email: "",
        })
    }
    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(id, employee)
            .then(response => {
                navigate("/employeeList")
            })
            .catch(error => {
                console.log(error)
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
                        value={employee.firstName} onChange={(e) => handleChange(e)} />
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                    <input type="text" name="lastName" className="h-10 w-96 border mt-2 px-2 py-2"
                        value={employee.lastName} onChange={(e) => handleChange(e)} />
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Email</label>
                    <input type="email" name="email" className="h-10 w-96 border mt-2 px-2 py-2"
                        value={employee.email} onChange={(e) => handleChange(e)} />
                </div>
                <div className="flex">
                <div className="items-center justify-center h-14 w-full my-5">
                    <button onClick={updateEmployee} className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">Update</button>
                </div>
                <div className="items-center justify-center h-14 w-full my-5">
                    <button onClick={reset} className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">Reset</button>
                </div>
                </div>

            </div>
        </div>
    );
}
export default UpdateEmployee;