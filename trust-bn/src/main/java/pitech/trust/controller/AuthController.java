package pitech.trust.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @GetMapping("/login")
    public String login() {
        return "login was successful"; // This should resolve to login.html
    }
    @GetMapping("/logout")
    public String logout() {
        return "logout was successful"; // This should resolve to login.html
    }

}
