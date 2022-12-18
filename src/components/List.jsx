export const List = (props) => {
    const {repos, isLoading} = props;
    if(!repos) return null;
    if(!repos.length && !isLoading) return <p>Sorry, no items found</p>
    return(
        <ul>
        {repos.map(repo => <li key={repo.id}><b>{repo.name}</b> (⭐: {repo.stars})<br/><i>{repo.description}</i><br/><br/></li>)}
        </ul>
    )
}