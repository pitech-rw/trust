package pitech.trust.model;

import com.mongodb.lang.Nullable;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Setter
@Getter
@Document(collection = "users")
public class User {

    @Id
    private  String ID;
    private String nationalId;

    private String firstName;
    private String lastName;

    @Indexed(unique = true)
    @NotNull(message = "Email cannot be null")
    @Email(message = "invalid email")
    private String email;

    private String phoneNumber;
    private String location;
    private String type; // ADMIN, CLIENT
    private ArrayList<String> roles; // 
    private String status; // active, locked, suspended
    private String username;

    @NotNull(message = "password cannot be null")
    @Size(min = 6, max = 50)
    private String password;
    private Integer trust;




}
