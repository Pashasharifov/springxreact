package com.example.backend.service;

import com.example.backend.dto.EmployeeDTO;
import com.example.backend.entity.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> getAllEmployees();
    Employee createEmployee(EmployeeDTO employee);
    Employee findEmployeeById(Long employeeId);
    Employee updateEmployee(Long employeeId, EmployeeDTO employee);
    void removeEmployee(Long employeeId);
}
