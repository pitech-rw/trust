package pitech.trust.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pitech.trust.model.JobCategory;

@Repository
public interface JobCatRepository extends MongoRepository<JobCategory, String> {
}
