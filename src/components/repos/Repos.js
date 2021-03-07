//Create a list or map through the repos that are map in
import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({repos}) => { 
    //console.log(repos);   
    return repos.map((repo) => {  
        return <RepoItem repo={repo} key={repo.id} />
    })
}

Repos.propTypes = {
    repos:PropTypes.array.isRequired
}

export default Repos; 