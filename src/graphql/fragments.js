import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id,
    fullName, 
    description,
    language,
    forksCount, 
    stargazersCount, 
    ratingAverage, 
    reviewCount, 
    ownerAvatarUrl
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    rating
    createdAt
    text
    user {
      username
    }
  }
`;

export const REVIEW_PAGE_INFO = gql`
  fragment ReviewPageInfo on ReviewConnection {
    pageInfo {
      endCursor
      startCursor
      totalCount
      hasNextPage
    }
  }
`;

export const REPOSITORIES_PAGE_INFO = gql`
  fragment RepositoriesPageInfo on RepositoryConnection {
    pageInfo {
      endCursor
      startCursor
      totalCount
      hasNextPage
    }
  }
`;
