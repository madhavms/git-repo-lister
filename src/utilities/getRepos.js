export const getRepos = async ({
    username,
    page = 1,
    per_page = 30,
    setIsLoading = () => {}
  } = {}) => {
      try {
      console.log('network call initiated')
      const response = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${per_page}&sort=updated`);
      const repos = await response.json();
      setIsLoading(false)
      return repos
        .map((repo) => {
            return {
                id:repo.id,
                name: repo.name,
                url: repo.html_url,
                description: repo.description,
                stars: repo.stargazers_count
            }
        })
         .sort((first, second) => second.stars - first.stars)
         .filter(repo => repo.description)
    }
        catch(error) {
            return []
        }
    }
