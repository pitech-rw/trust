'use client'
import React, { useState } from 'react'
import Nav from '@/app/ui/top navbar/nav'
import Footer from '../ui/footer/footer'
import styles from '../auth/signin.module.css'


const SignupPage = () => {
    const handleSignup = () => {

    }

  const [password, setPassword] = useState('')
  const [ formData, setFormData ] = useState({
      email: '',
      phone: '',
      password: '',
      password_: ''
      
  })
  return (
    <main>
      <Nav />
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>
          <h2 className={styles.title}>Register </h2>
          <button className= {styles.button}>
            Register
          </button>
        </div>
        <form onSubmit={handleSignup}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              required
            />
          </div>
            <div className={styles.formGroup}>
            <label htmlFor="telephone">Phone number</label>
            <input
                type="tel"
                id="phone"
                value={formData.phone}
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
            <div className={styles.formGroup}>
            <label htmlFor='password_'>Re-type password</label>
            <input
                type='password'
                id='password_'
                value={formData.password_}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
          <button type="submit" className={styles.submitButton}>
            Register
          </button>
        </form>
        </div>
        <Footer />
      </main>
    )
}

export default SignupPage