package com.example.backend.service.impl;

import com.example.backend.entity.Employee;
import com.example.backend.repository.EmployeeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl {
    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee findEmployeeById(Long employeeId) {
        Optional<Employee> employee = employeeRepository.findById(employeeId);
        return employee.orElse(null);
    }

    public Employee updateEmployee(Long employeeId, Employee employee) {
        Optional<Employee> foundedEmployee = employeeRepository.findById(employeeId);
        if (foundedEmployee.isPresent()){
            Employee updateEmployee = foundedEmployee.get();

            updateEmployee.setId(employee.getId());
            updateEmployee.setFirstName(employee.getFirstName());
            updateEmployee.setLastName(employee.getLastName());
            updateEmployee.setEmail(employee.getEmail());
            return employeeRepository.save(updateEmployee);
        }
        return null;
    }

    public void removeEmployee(Long employeeId) {
        employeeRepository.deleteById(employeeId);
    }
}
