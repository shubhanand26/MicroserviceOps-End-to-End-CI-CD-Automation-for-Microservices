package com.example.crudspring;

import com.example.crudspring.models.Employee;
import com.example.crudspring.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrudSpringApplication implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(CrudSpringApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        Employee employee = new Employee(1L, "kemane", "Donfack", "kemane@gmail.com");
        Employee employee1 = new Employee(2L, "ivan", "Nafack", "nafack@gmail.com");

        employeeService.createEmployee(employee);
        employeeService.createEmployee(employee1);
    }

}