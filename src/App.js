import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

// import custom components
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search'

function App() {
// items is an empty array that we will store some data into using hooks. the update funstion is setItems
  const [ items, setItems ] = useState([]);
  // this sia boolean variable called isLoading, the update function is setIsLoading
  const [ isLoading, setIsLoading ] = useState(true);
  const [ query, setQuery ] = useState('');

  useEffect (() => {
    const fetchItems = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(res.data);
      setItems(res.data);
      setIsLoading(false);
    }
    fetchItems()
  }, [query])
  // an empty array states that teh useEffect will be called once after the component has mounted

  return (
    <div className="container">
     <Header/>
     <Search getQuery={(q) => setQuery(q)}/>
     <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
