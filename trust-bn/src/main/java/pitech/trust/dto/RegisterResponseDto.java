package pitech.trust.dto;

import lombok.Data;
import pitech.trust.model.User;
@Data
public class RegisterResponseDto {
    User user;
    String response;
}
