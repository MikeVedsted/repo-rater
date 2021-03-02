import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ ordering, searchKeyword }) => {
  const { orderBy, orderDirection } = ordering;
  const [repositories, setRepositories] = useState();
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES);

  useEffect(() => {
    console.log(orderBy, orderDirection, searchKeyword, 'fra hook');
  }, [ordering, searchKeyword]);

  useEffect(() => {
    refetch({ orderBy, orderDirection, searchKeyword });
  }, [orderBy, orderDirection, searchKeyword]);
  
  useEffect(() => {
    if (!loading && !error) {
      setRepositories(data.repositories);
    }
  }, [data, error, loading]);

  return { repositories, loading };
};

export default useRepositories;
