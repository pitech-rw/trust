import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.quickLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/help-center">Help Center</a></li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com/pitechrwanda" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://linkedin.com/company/pitechrwanda" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className={styles.newsletter}>
          <h4>Newsletter</h4>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className={styles.contactInfo}>
          <h4>Contact Us</h4>
          <p>1 KN 78 St <br />Kigali, Rwanda </p>
          <p>Email: <a href="mailto:info@trust.rw">info@trust.rw</a></p>
          <p>Phone: <a href="tel:+250787799082">(250) 787-799082</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;