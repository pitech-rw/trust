"use client"

import { useState } from 'react'
import styles from './nav.module.css'
import Link from 'next/link'

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navItems = {
        '/#': "Services",
        "/#hiw": "How It Works",
        '/auth': "Join"
    }
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }
    return (
        <div className={styles.navigation}>
            <div className={styles.nav_left}>
                <Link href='/'><h1>Trust</h1></Link>
            </div>
            <div className= {styles.nav_right}>
                <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                     ☰
                </button>
                <ul className={`${styles.navList} ${mobileMenuOpen? styles.navListMobile : ''}`}>
                    {
                        Object.entries(navItems).map(([key_, value]) => (
                            <Link href={key_}><li key={key_}>{value}</li></Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav