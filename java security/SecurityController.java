package com.example.security;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class SecurityController {
    @GetMapping("/")
    public String show(){
        return("<h1>hello everyone welcome to my page </h1>");
    }
    @GetMapping("/user")
    public String show1(){
        return("<h1>hello everyone,welcome to user page </h1>");
    }
    @GetMapping("/admin")
    public String show2(){
        return("<h1>hello everyone,welcome to admin page </h1>");
    }
}
