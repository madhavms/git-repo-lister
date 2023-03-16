import { getRepos } from './utilities/getRepos';
import './App.css';
import { List } from './components/List';
import { useState, useEffect } from 'react';
import { Loader } from './components/Loader';

const DEFAULT_USER = 'facebook';

function App() {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState(DEFAULT_USER);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRepos({ username: user, setIsLoading }).then((data) => setRepos(data));
  }, [user]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setUser(text);
      setIsLoading(true);
    }
  };

  return (
    <div className="App">
      <h1>Repos for user: {user}</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          placeholder="Enter username"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary form-button"
          disabled={!text}
        >
          Submit
        </button>
      </form>
      <Loader isLoading={isLoading}>
        <List repos={repos} isLoading={isLoading} />
      </Loader>
    </div>
  );
}

export default App;
