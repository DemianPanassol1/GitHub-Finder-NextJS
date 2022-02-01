import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { context, dispatchContext } from '../../components/react/context';

import styles from '../../styles/userLogin.module.css';
import User from '../../components/layouts/User';
import Repos from '../../components/layouts/Repos';
import Loader from '../../components/UI/Loader';


function UserPage() {

    const { user, repos, isLoading } = useContext(context);
    const { findUser, clearUser } = useContext(dispatchContext);
    const { query } = useRouter();

    useEffect(() => {
        findUser(query.userLogin);

        //eslint-disable-next-line
    }, []);

    return isLoading ? <Loader /> : (user !== null && (
        <section className={styles.container}>
            <div onClick={() => clearUser()}>
                <Link href='/'>De volta a pesquisa</Link>
            </div>

            <User user={user} />
            <Repos repos={repos} />
        </section>
    ));
};

export default UserPage;
