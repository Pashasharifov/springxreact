import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
    return (
        <div className="container mx-auto my-8">
            <div className="h-12 w-100">
                <button className="rounded bg-slate-600 text-white px-6 py-2 font-semibold text-left cursor-pointer">Add Employee</button>
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
                </table>
            </div>
        </div>
    );
}
export default EmployeeList;