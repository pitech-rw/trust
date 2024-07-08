'use client'
import styles from './hero.module.css'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

const HeroSection = () => {
    const [isSearchListVisible, setIsSearchListVisible] = useState(false)
    const userSearch = useSearchParams()

    const instantSearch = (e: string) => {
        const params = new URLSearchParams(userSearch)
        setIsSearchListVisible(e.length > 0)
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
                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="What do you need help with?"
                        className={styles.searchInput}
                        onChange={(e) => {instantSearch(e.target.value)}}
                    />
                    <button className={styles.searchButton} type='submit'>Search</button>
                    {
                        isSearchListVisible && (
                            <div className={styles.searchList}>
                                <ol>
                                    <li>Search results... </li>
                                    <li>Search results... </li>
                                    <li>Search results... </li>
                                </ol>
                            </div>
                        )
                    }
                </div>
                
            </div>
        </div>
    )
}

export default HeroSection
