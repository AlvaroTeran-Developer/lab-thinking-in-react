import React, { useState, useEffect } from 'react';
import './App.css';
import ItemsJSON from './data.json';
import List from './Components/List/List';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [items, setItems] = useState(ItemsJSON.data);
  const [search, setSearch] = useState('');

  const getInfo = (search2) => {
    setSearch(search2);
  };

  const colorName = (items) => {
    items.map((item) => {
      let color = item.stocked ? 'black' : 'red';
    });
    return color;
  };

  useEffect(() => {
    let copy = ItemsJSON.data.filter((elm) => elm.name.includes(search));
    setItems(copy);
  }, [search]);

  return (
    <div className="App">
      <h1 className="TitleSotre">IronStore</h1>
      <SearchBar getInfo={getInfo} />
      <List items={items} colorName={colorName}></List>
    </div>
  );
}

export default App;
