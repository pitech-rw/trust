import styles from './servicesOverview.module.css';

const services = [
  { id: 1, name: 'Cleaning', description: 'Professional home cleaning services.', icon: '🧹' },
  { id: 2, name: 'Gardening', description: 'Expert gardening services for your home.', icon: '🌿' },
  { id: 3, name: 'Handyman', description: 'Skilled handyman services for all your needs.', icon: '🛠' }
];

const ServicesOverview = () => {
  return (
    <div className={styles.servicesSection}>
      <h2 className={styles.title}>Available Services</h2>
      <div className={styles.servicesContainer}>
        {services.map(service => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.serviceName}>{service.name}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <a href="#" className={styles.learnMore}>Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;