import React from 'react';

import styles from '../../styles/about.module.css';

function AboutPage() {
    return (
        <div className={styles.container}>
            <h1>Sobre esse App:</h1>
            <p>Aplicativo para realizar a busca de usúarios do GitHub usando a API do GitHub e NextJS.</p>
            <p>Versão: 1.0.2</p>
        </div>
    );
};

export default AboutPage;
