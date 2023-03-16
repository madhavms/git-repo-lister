import '../styles/List.css';

export const List = (props) => {
  const {repos, isLoading} = props;
  if(!repos) return null;
  if(!repos.length && !isLoading) return <p>Sorry, no items found</p>
  return(
    <ul className="list">
      {repos.map(repo => 
        <li key={repo.id} className="list-item">
          <h3 className="list-title"><b>{repo.name}</b></h3>
          <p className="list-stars">⭐ {repo.stars}</p>
          <p className="list-description">{repo.description}</p>
        </li>
      )}
    </ul>
  )
}
