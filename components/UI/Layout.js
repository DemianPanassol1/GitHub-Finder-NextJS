import React from 'react';
import Head from 'next/head'
import { Provider } from '../react/context';
import Navbar from './Navbar';

import styles from '../../styles/layout.module.css';

function Layout(props) {
    return (
        <Provider>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                    crossOrigin="anonymous" referrerPolicy="no-referrer" />

                <meta name='description' content='App criado com NextJS que consome a API do GitHub para buscar e mostrar usuários'></meta>

                <title>GitHub Finder with NextJS</title>
            </Head>
            <Navbar />
            <section className={styles.container}>
                {props.children}
            </section>
        </Provider>
    );
};

export default Layout;
