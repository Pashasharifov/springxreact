package com.example.backend.service.impl;

import com.example.backend.dto.EmployeeDTO;
import com.example.backend.entity.Employee;
import com.example.backend.exception.EmployeeNotFoundException;
import com.example.backend.repository.EmployeeRepository;
import com.example.backend.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee createEmployee(EmployeeDTO employee) {
        Employee employee1 = new Employee();
        employee1.setFirstName(employee.getFirstName());
        employee1.setLastName(employee.getLastName());
        employee1.setEmail(employee.getEmail());
        return employeeRepository.save(employee1);
    }

    @Override
    public Employee findEmployeeById(Long employeeId) {
        Optional<Employee> employee = employeeRepository.findById(employeeId);
        return employee.orElseThrow(()-> new EmployeeNotFoundException("Employee not found !!!"));
    }

    @Override
    public Employee updateEmployee(Long employeeId, EmployeeDTO employee) {
        Optional<Employee> foundedEmployee = employeeRepository.findById(employeeId);
        if (foundedEmployee.isPresent()){
            Employee updateEmployee = foundedEmployee.get();

            updateEmployee.setFirstName(employee.getFirstName());
            updateEmployee.setLastName(employee.getLastName());
            updateEmployee.setEmail(employee.getEmail());
            return employeeRepository.save(updateEmployee);
        }
        throw new EmployeeNotFoundException("Employee Not Found with id : " + employeeId);
    }

    @Override
    public void removeEmployee(Long employeeId) {
        employeeRepository.deleteById(employeeId);
    }
}
