'use client'
import styles from './hero.module.css'
import { useRouter } from 'next/navigation'

const HeroSection = () => {
    const router = useRouter()
    const instantSearch = (e: React.FormEvent<HTMLFormElement>) => {
        router.push(
            '/ui/search'
        )

    }
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h2 className={styles.headline}>
                Find Trusted Home Service Workers Easily <span>-&gt;</span>
                </h2>
                <h4 className={styles.subheadline}>
                Request for a home service provider and get unmatched experience
                </h4>
                <form onSubmit={instantSearch}>
                    <div className={styles.searchBar}>
                        <input
                            type="text"
                            placeholder="What do you need help with?"
                            className={styles.searchInput}
                        />
                        <button className={styles.searchButton} type='submit'>Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HeroSection
