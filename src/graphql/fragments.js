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
    __typename
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    rating
    user {
      username
      __typename
    }
    createdAt
    text
    __typename
  }
`;

