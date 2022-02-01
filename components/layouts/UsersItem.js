import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/usersItem.module.css';

function UsersItem({ data }) {

    const { login, avatar_url } = data;
    
    return (
        <div className={styles.container}>
            <Image
                src={avatar_url}
                alt={login}
                width={60}
                height={60}
                className={styles.img}
            />

            <h3>{login}</h3>

            <div className={styles.btn}>
                <Link
                    href={`/user/${login}`}
                    className={styles.btn}
                >
                    Mais info
                </Link>
            </div>
        </div>
    );
};

export default UsersItem;
