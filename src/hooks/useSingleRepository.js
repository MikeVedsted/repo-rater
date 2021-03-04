import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORY } from '../graphql/queries';

const useSingleRepository = ({ id, first }) => {
  const [repository, setRepository] = useState();
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    variables: { id, first },
    fetchPolicy: 'cache-and-network'
  });

  const handleFetchMore = async () => {
    const canFetchMore = !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORY,
      variables: {
        id,
        first,
        after: data.repository.reviews.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...previousResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges
              ],
            },
          },
        };
        return nextResult;
      },
    });
  };

  useEffect(() => {
    if (data && !loading && !error) {
      setRepository(data.repository);
    }
  }, [data, error, loading]);

  return { repository, fetchMoreReviews: handleFetchMore, loading };
};

export default useSingleRepository;
