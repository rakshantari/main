package com.example.exampleCRUD.repo;

import com.example.exampleCRUD.model.Employees;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepo extends MongoRepository<Employees,Integer> {
}
