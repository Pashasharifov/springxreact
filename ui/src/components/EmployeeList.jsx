import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "./service/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);
    useEffect(() => {
        let mounted =true;
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await EmployeeService.getAllEmployees();
                if(mounted){
                    setEmployees(response.data);
                    console.log(response)
                }
            } catch (error) {
                if(mounted){
                    console.log(error)
                }
            }
            if(mounted){
                setLoading(false);
            }
        };
        fetchData();
        return () => {
            mounted = false;
        }
    }, [])
    const deleteEmployee = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then(res => {
            if(employees){
                setEmployees(prevElem => {
                    return prevElem.filter(employee => employee.id !== id)
                })
            }
        })
    }

    const navigate = useNavigate();
    return (
        <div className="container mx-auto my-8">
            <div className="h-12 w-100">
                <button onClick={() => {navigate("/addEmployee")}} className="rounded bg-slate-600 text-white px-6 py-2 font-semibold text-left cursor-pointer">Add Employee</button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-fray-50">
                        <tr>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">First Name</th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Last Name</th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Email Name</th>
                            <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Action</th>
                        </tr>
                    </thead>
                    {!loading && (
                    <tbody className="bg-white ">
                        {employees.map(employee => <Employee key={employee.id} employee={employee} deleteEmployee={deleteEmployee}/>)}
                    </tbody>
                    )}
                </table>
            </div>
        </div>
    );
}
export default EmployeeList;