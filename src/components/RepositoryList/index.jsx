import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import SearchField from './SearchField';

const RepositoryList = () => {
  const [ordering, setOrdering] = useState({ orderBy: "CREATED_AT", orderDirection: "DESC" });
  const [searchKeyword, setSearchKeyword] = useState('');
  const { repositories } = useRepositories({ ordering, searchKeyword });
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
    <RepositoryListContainer repositories={repositories} header={
      <>
        <SearchField handleSearch={handleSearch} debounceBy={500} />

        <RNPickerSelect
          onValueChange={(value) => handleValueChange(value)}
          items={orderOptions}
        />

      </>
    } />
  );
};

export default RepositoryList;
