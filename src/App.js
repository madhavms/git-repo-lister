import {getRepos} from './utilities/getRepos'
import './App.css';
import { List } from './components/List';
import { useState, useEffect } from 'react';
import { Loader } from './components/Loader';

const DEFAULT_USER = 'facebook'

function App() {

  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState(DEFAULT_USER);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getRepos({username:user, setIsLoading}).then(data => setRepos(data));
  },[user])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(text)
    if(text){
      setUser(text);
      setIsLoading(true);
    }
  }

  return (
    <div className="App">
      <h1>Repos for user: {user}</h1>
      <form onSubmit={handleFormSubmit}>
      <input placeholder="Enter username" onChange={e => setText(e.target.value)}/>
      &nbsp;
      <button type="submit" className='btn btn-primary' disabled={!text}>Submit</button>
      </form>
      <Loader isLoading={isLoading}>
      <List repos={repos} isLoading={isLoading}/>
      </Loader>
    </div>
  );
}

export default App;
