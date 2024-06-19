'use client'
import { useState } from 'react';
import styles from './signin.module.css';
import Nav from '../ui/top navbar/nav';
import Footer from '../ui/footer/footer';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your login logic here, such as calling an authentication API
    console.log('Login submitted with:', { email, password });
    // Reset form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <main>
      <Nav />
      <div className={styles.loginContainer}>
        <h2>Login</h2>
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
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default AuthPage
