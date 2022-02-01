import Image from 'next/image';
import React, { Fragment } from 'react';

import styles from '../../styles/user.module.css';

function User({ user }) {

    const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company } = user;

    const available = hireable ? `fa-check ${styles.success}` : `fa-times-circle ${styles.danger}`;

    return (
        <Fragment>
            <p className={styles.available}>
                Disponível para trabalho: <i className={`fas ${available}`} />
            </p>

            <div className={styles.container}>
                <div className={styles.containerCenter}>
                    <Image
                        src={avatar_url}
                        width={150}
                        height={150}
                        alt='Imagem do usuário'
                        className={styles.img}
                    />

                    <h1>{name}</h1>
                    <p>Localização: {location}</p>
                </div>
                <div className={styles.listContainer}>
                    {bio && (
                        <Fragment>
                            <h3>Bio:</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a
                        href={html_url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.btnLink}
                    >
                        Visitar perfil no github
                    </a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Nome de Usuário:</strong> {login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Empresa:</strong> {company}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Site:</strong> {blog}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.badgeContainer}>
                <div className={styles.badgePrimary}>Seguidores: {followers}</div>
                <div className={styles.badgeSuccess}>Seguindo: {following}</div>
                <div className={styles.light}>Repositórios Públicos: {public_repos}</div>
                <div className={styles.dark}>Gists Públicos: {public_gists}</div>
            </div>
        </Fragment>
    );
};

export default User;
