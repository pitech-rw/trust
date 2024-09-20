package pitech.trust.dto;

import lombok.Data;
import pitech.trust.model.User;
@Data
public class RegisterResponseDto {
    private String email;
    private String userName;
    private String phoneNumber;
    private String message;

}
