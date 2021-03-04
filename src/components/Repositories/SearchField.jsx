import React from 'react';

import TextInput from '../TextInput';

const SearchField = ({ handleSearch, debounceBy }) => {
  let timeoutId;

  const handleChange = (value) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      handleSearch(value);
    }, debounceBy);
  };

  return (
    <TextInput onChangeText={handleChange} placeholder='Search' />
  );
};

export default SearchField;
