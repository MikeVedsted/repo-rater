import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { data, error, loading } = useQuery(GET_REPOSITORIES);

  useEffect(() => {
    if (!loading && !error) {
      setRepositories(data.repositories);
    }
  }, [data, error, loading]);

  return { repositories, loading };
};

export default useRepositories;
