"use client"

import { useState, useEffect} from 'react'
import styles from './nav.module.css'
import Link from 'next/link'

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navItems = {
        '/#': "Services",
        "/#hiw": "How It Works",
        '/auth': "Join",
        '/lang': "Hindura ururimi"
    }
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }
    useEffect(() => {
        const navListElt = document.querySelector('ul')

        if (mobileMenuOpen) {
            navListElt?.classList.remove(styles.navList)
            navListElt?.classList.add(styles.navListMobile)
        }
    }, [mobileMenuOpen])
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
                            <li key={key_}><Link href={key_}> {value}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav