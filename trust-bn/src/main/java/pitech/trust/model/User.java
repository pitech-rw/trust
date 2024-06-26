package pitech.trust.model;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document(collection = "users")
public class User {

    @Id
    private String nationalId;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String location;
    private String type; // ADMIN, CLIENT
    private ArrayList<String> roles; // 
    private String status; // active, locked, suspended
    private String username;
    private String password;
    private Integer trust;




}
