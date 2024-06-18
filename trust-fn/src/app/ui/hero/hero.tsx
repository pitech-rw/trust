import styles from './hero.module.css'

const HeroSection = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h2 className={styles.headline}>
                Find Trusted Home Service Workers Easily <span>-&gt;</span>
                </h2>
                <h4 className={styles.subheadline}>
                Request for a home service provider and get unmatched experience
                </h4>
                <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="What do you need help with?"
                    className={styles.searchInput}
                />
                <button className={styles.searchButton}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
