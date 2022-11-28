import Detail from "./components/Details";
import RepoList from "./components/RepoList";
import Search from "./components/Search";
import { github } from './utills';
import { useEffect, useState } from 'react';

function App() {
  const [detail, setDetail] = useState({});
  const [repoList, setRepoList] = useState([]);
  const [username, setUsername] = useState("GitHub");

  useEffect(_ => {
    (async _ => {
      const response = await github.get(`/${username}`);
      setDetail(response.data);
    })();
  }, [username]);

  useEffect(_ => {
    (async _ => {
      const response = await github.get(`/${username}/repos`);
      setRepoList(response.data);
    })();
  }, [username]);

  const searchedUsername = keyword => {
    setUsername(keyword);
  }

  return (
    <main>
      <div className="searchBar">
        <span className="logo">GitFii&nbsp;<>💨</></span>
        <Search searchedUsername={searchedUsername} />
      </div>
      <div className="mainSec">
        <Detail data={detail} />
        <RepoList data={repoList} />
      </div>
    </main>
  );
}

export default App;