import React, { useContext, useMemo } from 'react';
import { context } from '../react/context';

import styles from '../../styles/users.module.css';
import Loader from '../UI/Loader';
import UsersItem from './UsersItem';

function Users() {
    const { users, isLoading } = useContext(context);
    return useMemo(() => {
        return (
            <div className={styles.container}>
                {isLoading ? <Loader /> : (
                    users.map(user => {
                        return <UsersItem key={user.id} data={user} />
                    })
                )}
            </div>
        );
    }, [users, isLoading]);

};

export default Users;