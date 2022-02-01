import React from 'react';

import styles from '../../styles/repoItem.module.css';

function RepoItem({ repo }) {
    return (
        <div className={styles.container}>
            <h3>
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {repo.name}
                </a>
            </h3>
        </div>
    );
};

export default RepoItem;
