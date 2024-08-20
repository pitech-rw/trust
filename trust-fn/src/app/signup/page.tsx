'use client'
import React, { FormEvent, useState } from 'react'
import Nav from '@/app/ui/top navbar/nav'
import Footer from '../ui/footer/footer'
import styles from '../auth/signin.module.css'
import { z } from 'zod'
import { auth } from '../utils/server'

const SignupPage = () => {
    const handleSignup = (e: any) => {
      e.preventDefault()
      
    }

  const [password_, setPassword_] = useState('')
  const [ formData, setFormData ] = useState({
      email: '',
      phone: '',
      password: '',
      
  })

  const passwords = z.object({
    password: z.string().min(8),
    password_: z.string().min(8)
  })
  .refine(
    (data) => data.password === data.password_, {
      message: "Passwords don't match",
      path: ["password_"]
    }
  )
  
  const checkPasswords = (e: any) => {
    setPassword_(e.target.value)

    try {
      passwords.safeParse({
        password: formData.password,
        password_: e.target.value
      })
    } catch (e) {
      console.error(e)
      }
  }

  const handleChange = (ev: { target: { name: any; value: any } }) => {
    const {name, value } = ev.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
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
              placeholder={formData.email}
              onChange={handleChange}
              required
            />
          </div>
            <div className={styles.formGroup}>
            <label htmlFor="telephone">Phone number</label>
            <input
                type="tel"
                id="phone"
                pattern="07[2389]\d{7}"                
                placeholder={formData.phone}
                onChange={handleChange}
                title='078 | 079 | 072 | 073'
                required
            />
            </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder={formData.password}
              minLength={8}
              onChange={handleChange}
              required
            />
          </div>
            <div className={styles.formGroup}>
            <label htmlFor='password_'>Re-type password</label>
            <input
                type='password'
                id='password_'
                placeholder={password_}
                minLength={8}
                onChange={checkPasswords}
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