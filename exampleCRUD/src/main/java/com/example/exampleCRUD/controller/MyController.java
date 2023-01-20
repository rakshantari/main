package com.example.exampleCRUD.controller;

import com.example.exampleCRUD.model.Employees;
import com.example.exampleCRUD.service.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restapi")
public class MyController {
    @Autowired
    public MyService myService;

    @GetMapping
    public List<Employees> getEmps(){
        return myService.getEmp();
    }
    @PostMapping
    public Employees setEmps(@RequestBody Employees employees){
        return myService.sepEmp(employees);
    }

    @PutMapping
    public Employees updateEmps(@RequestBody Employees employees){
        return myService.updateEmp(employees);
    }

    @DeleteMapping("{id}")
    public String deleteEmps(@PathVariable int id){
        return myService.deleteEmp(id);
    }
}
