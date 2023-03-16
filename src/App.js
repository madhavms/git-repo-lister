import { getRepos } from './utilities/getRepos';
import './App.css';
import { List } from './components/List';
import { useState, useEffect } from 'react';
import { Loader } from './components/Loader';

function App() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({name:''});
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchInitialised, setSearchInitalised] = useState(false);

  useEffect(() => {
    if (!!user.name)
      getRepos({ username: user.name, setIsLoading }).then((data) => setRepos(data));
  }, [user]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchInitalised(true)
      setUser({name: text});
      setIsLoading(true);
    }
  };

  const handleClearClick = () => {
    setText('');
  }

  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-title">Git Repo Lister</h1>
      </nav>
      <div className="container">
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form-input-container">
            <input
              className="form-input"
              placeholder="Enter username"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary form-button"
            disabled={!text}
          >
            Submit
          </button>
        </form>
        <Loader isLoading={isLoading}>
          <List repos={repos} isLoading={isLoading} searchInitialised={searchInitialised} />
        </Loader>
      </div>
    </div>
  );
}

export default App;
