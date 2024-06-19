import styles from './nav.module.css'
import Link from 'next/link'

const Nav = () => {
    const navItems = {
        '/#': "Services",
        "/#hiw": "How It Works",
        '/auth': "Join"
    }
    return (
        <div className={styles.navigation}>
            <div className={styles.nav_left}>
                <Link href='/'><h1>Trust</h1></Link>
            </div>
            <div >
                <ul className={styles.nav_right}>
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