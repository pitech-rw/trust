package pitech.trust.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pitech.trust.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
}
