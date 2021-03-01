import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {
  const [repositories, setRepositories] = useState();
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES);

  useEffect(() => {
    refetch({ orderBy, orderDirection });
  }, [orderBy, orderDirection]);
  
  useEffect(() => {
    if (!loading && !error) {
      setRepositories(data.repositories);
    }
  }, [data, error, loading]);

  return { repositories, loading };
};

export default useRepositories;
