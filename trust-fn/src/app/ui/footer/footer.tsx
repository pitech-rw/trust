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
              <svg viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg" fill="#fff" role="img" aria-hidden="true" className={styles['x-icon']}><mask id="XIcon-mask-:R53aacd6dd9l6:"><g clip-path="url(#x-icon_svg__x-icon_svg__a)" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.323 11.586L.875.375h2.802l8.448 11.211H9.323zM11.727.375L7.273 5.151m-6 6.436l4.45-4.773"></path></g><defs><clipPath id="x-icon_svg__x-icon_svg__a"><path fill="#fff" d="M.5 0h12v12H.5z"></path></clipPath></defs></mask><g mask="url(#XIcon-mask-:R53aacd6dd9l6:)"><rect width="100%" height="100%" fill="currentColor"></rect></g></svg>
            </a>
            <a href="https://linkedin.com/company/pitechrwanda" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff" role="img" aria-hidden="true" className={styles['x-icon']}>
                <mask id="LinkedInIcon-mask">
                  <g clip-path="url(#linkedin-icon_svg__clip)" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6.94 6.94H4.5V21h2.44V6.94zM5.72 4.5a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88zM19.5 14.46V21h-2.44v-5.44c0-1.3-.02-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.88V21h-2.44V6.94h2.35v1.91h.03c.33-.63 1.14-1.3 2.35-1.3 2.51 0 2.98 1.65 2.98 3.79z"/>
                  </g>
                  <defs>
                    <clipPath id="linkedin-icon_svg__clip">
                      <path fill="#fff" d="M0 0h24v24H0z"/>
                    </clipPath>
                  </defs>
                </mask>
                <g mask="url(#LinkedInIcon-mask)">
                  <rect width="100%" height="100%" fill="currentColor"/>
                </g>
  </svg>

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