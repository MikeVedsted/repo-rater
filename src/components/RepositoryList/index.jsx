import React, { useState } from 'react';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [ordering, setOrdering] = useState({ orderBy: "CREATED_AT", orderDirection: "DESC" });
  const { repositories } = useRepositories(ordering);
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

  return (
    <RepositoryListContainer repositories={repositories} header={
      <RNPickerSelect
        onValueChange={(value) => handleValueChange(value)}
        items={orderOptions}
      />
    } />
  );
};

export default RepositoryList;
