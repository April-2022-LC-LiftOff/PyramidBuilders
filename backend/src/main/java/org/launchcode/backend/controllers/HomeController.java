package org.launchcode.backend.controllers;


import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/project")
public class HomeController {

    @GetMapping
    public @ResponseBody String greeting() {
        return "Hello, World";
    }
}
