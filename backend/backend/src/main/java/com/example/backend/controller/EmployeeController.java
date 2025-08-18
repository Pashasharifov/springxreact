package com.example.backend.controller;

import com.example.backend.entity.Employee;
import com.example.backend.service.impl.EmployeeServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
    private final EmployeeServiceImpl employeeService;

    public EmployeeController(EmployeeServiceImpl employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        return  new ResponseEntity<>(employeeService.getAllEmployees(), HttpStatus.OK);
    }
    @PostMapping("/new")
    public  ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
        return new ResponseEntity<>(employeeService.createEmployee(employee), HttpStatus.CREATED);
    }
    @GetMapping("/edit/{employeeId}")
    public ResponseEntity<Employee> findEmployeeById(@PathVariable Long employeeId){
        return new ResponseEntity<>(employeeService.findEmployeeById(employeeId), HttpStatus.OK);
    }
    @PutMapping("/{employeeId}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long employeeId, @RequestBody Employee employee){
        return new ResponseEntity<>(employeeService.updateEmployee(employeeId, employee), HttpStatus.OK);
    }
    @DeleteMapping("/employeeId")
    public void removeEmployee(@PathVariable Long employeeId){
        employeeService.removeEmployee(employeeId);
    }
}
