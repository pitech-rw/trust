import styles from './cta.module.css';

const CallToAction = () => {
  return (
    <div className={styles.ctaSection}>
      <h2 className={styles.headline}>Ready to Get Started?</h2>
      <p className={styles.subheadline}>
        Join our community and find the help you need today.
      </p>
      <button className={styles.ctaButton}>Sign Up Now</button>
    </div>
  );
};

export default CallToAction;