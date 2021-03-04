import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

import SearchField from './SearchField';
import RepositoryList from './RepositoryList';
import useRepositories from '../../hooks/useRepositories';

const Repositories = () => {
  const [ordering, setOrdering] = useState({ orderBy: "CREATED_AT", orderDirection: "DESC" });
  const [searchKeyword, setSearchKeyword] = useState('');
  const { repositories, fetchMore } = useRepositories({ ordering, searchKeyword, first: 4 });

  const orderOptions = [
    { label: 'Latest repositories', value: 'latest' },
    { label: 'Highest rated repositories ', value: 'highest' },
    { label: 'Lowest rated repositories', value: 'lowest' }
  ];

  const handleValueChange = (value) => {
    if (value === 'highest') {
      setOrdering({ orderBy: "RATING_AVERAGE", orderDirection: "DESC" });
    } else if (value === "lowest") {
      setOrdering({ orderBy: "RATING_AVERAGE", orderDirection: "ASC" });
    } else {
      setOrdering({ orderBy: "CREATED_AT", orderDirection: "DESC" });
    }
  };

  const handleSearch = (value) => {
    setSearchKeyword(value);
  };

  return (
    <RepositoryList repositories={repositories} onEnd={fetchMore} header={
      <>
        <SearchField handleSearch={handleSearch} debounceBy={500} />
        <RNPickerSelect onValueChange={(value) => handleValueChange(value)} items={orderOptions} />
      </>
    } />
  );
};

export default Repositories;