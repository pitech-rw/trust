'use client'
import { useState } from 'react';
import styles from './signin.module.css';
import Nav from '../ui/top navbar/nav';
import Footer from '../ui/footer/footer';
import StyledLink from '../ui/shared/Link/StyledLink';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false)
  const [ staySignedIn, setStaySignedIn] =useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your login logic here, such as calling an authentication API
    console.log('Login submitted with:', { email, password });
    // Reset form fields after submission
    setEmail('');
    setPassword('');
  };

  const toggleForm = () => {
    setIsRegister(!isRegister)
  }

  return (
    <main>
      <Nav />
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>
          <h2 className={styles.title}>{isRegister ? 'Register': 'Sign In'}</h2>
          <button className= {`${styles.button} ${styles.toggleButton}`} onClick={toggleForm}>
            {isRegister? 'Sign in': 'Register'}
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {
            isRegister && (
              <div className={styles.formGroup}>
                <label htmlFor="telephone">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )
          }
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {
            isRegister && (
              <div className={styles.formGroup}>
                <label htmlFor='password_'>Re-type password</label>
                <input
                  type='password'
                  id='password_'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )
          }
          { !isRegister && (
            <div className={styles.formOptions}>
              <label>
                <input
                  type="checkbox"
                  checked={staySignedIn}
                  onChange={(e) => setStaySignedIn(e.target.checked)}
                />
              </label>
              <a href='#' className={styles.forgotPassword}>
                Forgot your password?
              </a>
            </div>
          )}
          <button type="submit" className={styles.submitButton}>
            {isRegister? 'Register': 'Login'}
          </button>
          <div className={styles.divider}>or</div>
            <div className={styles.google}>
              <div>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
              </div>
              <div>
                <button type="button" className={styles.googleButton}>
                  Continue with Google
                </button>
              </div>
            </div>
        </form>
        {
          isRegister && (
            <div className={styles['small-prints']}>
              <p>By signing up, you agree to our   
                <span> <StyledLink href={"/terms"}>Terms of Use</StyledLink> </span>
                and 
                <span><StyledLink href={"/privacy-policy"}> Privacy Policy</StyledLink></span>.
              </p>
            </div>
          )
        }
      </div>
      <Footer />
    </main>
  );
};

export default AuthPage
