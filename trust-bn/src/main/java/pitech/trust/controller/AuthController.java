package pitech.trust.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pitech.trust.dto.LoginResponseDto;
import pitech.trust.dto.LoginUserDto;
import pitech.trust.dto.RegisterResponseDto;
import pitech.trust.dto.RegisterUserDto;
import pitech.trust.exception.UserAlreadyExistsException;
import pitech.trust.model.User;
import pitech.trust.service.AuthService;
import pitech.trust.service.JWTService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authenticationService;
    private final JWTService jwtService;
    public AuthController(JWTService jwtService, AuthService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }


    @GetMapping("/logout")
    public String logout() {
        return "logout was successful";
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginUserDto loginUserDto) {

        User authenticatedUser = authenticationService.authenticate(loginUserDto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponseDto loginResponseDto = new LoginResponseDto();
        loginResponseDto.setToken(jwtToken);
        loginResponseDto.setExpiresIn(jwtService.getExpirationTime());

        return ResponseEntity.ok(loginResponseDto);
    }

    @PostMapping("/signup")
    public ResponseEntity<RegisterResponseDto> signup(@RequestBody RegisterUserDto registerUserDto) {

        try {
            User registeredUser = authenticationService.signup(registerUserDto);

            RegisterResponseDto res = new RegisterResponseDto();
            res.setUser(registeredUser);
            res.setResponse("Created");
            return new ResponseEntity<>(res, HttpStatus.CREATED);
        }catch (UserAlreadyExistsException e){
            RegisterResponseDto res = new RegisterResponseDto();
            res.setUser(null);
            res.setResponse(e.toString());
            return new ResponseEntity<>(res, HttpStatus.CONFLICT);
        }
}

}
