package com.example.exampleCRUD.service;

import com.example.exampleCRUD.model.Employees;
import com.example.exampleCRUD.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MyService {
    @Autowired
    public EmployeeRepo employeeRepo;

    public List<Employees> getEmp(){
        return employeeRepo.findAll();
    }
    public Employees sepEmp(Employees employees){
        return employeeRepo.save(employees);
    }
    public Employees updateEmp(Employees employees){
        Employees emp=employeeRepo.findById(employees.getId()).get();
        emp.setId(employees.getId());
        emp.setName(employees.getName());
        emp.setAddress(employees.getAddress());
        return employeeRepo.save(emp);
    }
    public String deleteEmp(int id){
        employeeRepo.deleteById(id);
        return "Employee details has been deleted";
    }
}
