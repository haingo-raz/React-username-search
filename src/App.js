import React, {useState, useEffect} from 'react';
import UserCard from './components/UserCard';
import './style/constant.css';
import './style/searchBar.css'

const API_URL = "https://jsonplaceholder.typicode.com/users"

function App() {

  const [users, setUsers] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  //On page loading
  useEffect(()=> {
    searchUsers()
  }, [])

  //Set up the API
  const searchUsers = async (text) => {
    const response = await fetch(`${API_URL}?username=${text}`);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  }

  return (
    <>
      <h1>Username Finder</h1>
      <div className="search">
        <input
          type=""
          placeholder="Search a username..."
          value = {searchKey}
          onChange = {(e) => setSearchKey(e.target.value)}
        />
        <button
          onClick={() => searchUsers(searchKey)}>
          Search
        </button>
      </div>

      {/*Search results here*/}
      {users?.length > 0
      ? ( 
        <div className = "container">
          {users.map( (user) => (
          <UserCard key={user} user={user}/>
          ))}
        </div>

        ): ( //No corresponding username
              <div className="empty">
                <p>No results</p>
              </div>
        )
      } 
    </>
  )
}

export default App;
