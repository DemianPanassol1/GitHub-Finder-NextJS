import Link from 'next/link';
import React from 'react';

import styles from '../../styles/navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1>
                <i className={`fab fa-github ${styles.icone}`}></i>
                GitHub Finder 
            </h1>

            <ul>
                <li><Link href='/'>Início</Link></li>
                <li><Link href='/about'>Sobre</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
