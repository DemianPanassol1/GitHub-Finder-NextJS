import React from 'react';

import RepoItem from './RepoItem';

function Repos({ repos }) {

    return repos !== null && (
        repos.map(repo => {
            return <RepoItem key={repo.id} repo={repo} />
        })
    );
};

export default Repos;