import styles from './howitworks.module.css';

const steps = [
  { id: 1, title: 'Post Your Task', description: 'Describe the task you need help with.', icon: '📝' },
  { id: 2, title: 'Get Matched', description: 'We match you with the best service providers.', icon: '🤝' },
  { id: 3, title: 'Get It Done', description: 'Your task gets completed to your satisfaction.', icon: '✅' }
];

const HowItWorks = () => {
  return (
    <div className={styles.howItWorksSection}>
      <h2 className={styles.title}>How It Works</h2>
      <div className={styles.stepsContainer}>
        {steps.map(step => (
          <div key={step.id} className={styles.stepCard}>
            <div className={styles.icon}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks