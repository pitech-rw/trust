"use client"

import { useState, useEffect} from 'react'
import styles from './nav.module.css'
import Link from 'next/link'

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    const navItems = {
        '/#': "Services",
        "/#hiw": "How It Works",
        '/auth': "Join",
        '/lang': "Hindura ururimi"
    }

    const services = [
        {path: '/services/cleaning', label: 'Cleaning services'},
        {path: '/services/gardening', label: 'Gardening services'}
    ]
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
                        Object.entries(navItems).map(([path, label]) => (
                            <li
                              key={path}
                              onMouseEnter={() => setHoveredItem(label)}
                              onMouseLeave={() => setHoveredItem(label)}
                            ><Link href={path}> {label}</Link></li>
                            {label === 'Services' && hoveredItem === 'Services' && (
                                <ul className={styles.dropdownMenu}>
                                    {serviceMenuItems.map((item) => (
                                        <li key={item.path}>
                                            <Link href={item.path}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {label === 'How It Works' && hoveredItem === 'How It Works' && (
                                <ul className={styles.dropdownMenu}>
                                    {howItWorksMenuItems.map((item) => (
                                        <li key={item.path}>
                                            <Link href={item.path}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav