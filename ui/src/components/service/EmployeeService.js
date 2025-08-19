import axios from "axios";

const EMPLOYEE_BASE_API_URL = "http://localhost:8080/api/v1";

class EmployeeService {
    saveEmployee(employee){
        return axios.post(EMPLOYEE_BASE_API_URL + "/new", employee)
    }
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_API_URL + "/all")
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_BASE_API_URL + "/" + id)
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEE_BASE_API_URL + "/edit/" + id)
    }
    updateEmployee(id, employee){
        return axios.put(EMPLOYEE_BASE_API_URL + "/" + id, employee)
    }
}

export default new EmployeeService();