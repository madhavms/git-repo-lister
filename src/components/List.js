import '../styles/List.css';
import React from 'react';

export const List = (props) => {
  const {repos, isLoading, searchInitialised} = props;
  if(!repos) return null;
  if(!repos.length && !isLoading && searchInitialised) return <div class="flex"><p>Sorry, no items found</p></div>
  console.log(repos)
  return(
    <ul className="list">
      {repos.map(repo => 
        <li key={repo.id} className="list-item">
          <a href={repo.url} target="_blank" rel="noopener noreferrer" className="list-link">
            <h3 className="list-title"><b>{repo.name}</b></h3>
            <p className="list-stars">⭐ {repo.stars}</p>
            <p className="list-description">{repo.description}</p>
          </a>
        </li>
      )}
    </ul>
  )
}
