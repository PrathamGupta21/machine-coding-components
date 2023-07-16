import React, { useState } from 'react';

const list = ['Apple', 'Banana', 'Grapes', 'Kiwi', 'Avacado'];

const SearchFilter = () => {
  const [searchText, setSearchText] = useState('');

  const filteredList = list.filter((item) => {
    return item.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      <input
        placeholder='Type to search'
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <ul>
        {filteredList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
