import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ ordering, searchKeyword, first }) => {
  const { orderBy, orderDirection } = ordering;
  const [repositories, setRepositories] = useState();
  const { data, error, loading, refetch, fetchMore } = useQuery(GET_REPOSITORIES, { variables: { first } });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    
    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        orderBy,
        orderDirection,
        searchKeyword,
        first,
        after: data.repositories.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };
        return nextResult;
      },
    });
  };

  useEffect(() => {
    refetch({ orderBy, orderDirection, searchKeyword });
  }, [orderBy, orderDirection, searchKeyword]);
  
  useEffect(() => {
    if (!loading && !error) {
      setRepositories(data.repositories);
    }
  }, [data, error, loading]);

  return { repositories, fetchMore: handleFetchMore, loading };
};

export default useRepositories;
