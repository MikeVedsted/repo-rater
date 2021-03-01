import { gql } from 'apollo-boost';

export const LOG_IN = gql`
  mutation login($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
mutation addReview ( $repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
  createReview( review: {
    repositoryName: $repositoryName, 
    ownerName: $ownerName,
    rating: $rating,
    text: $text
  }) {
    id
    user {
      id
      username
    }
    repository {
      id
      ownerName
      name
    }
    userId
    repositoryId
    rating
    createdAt
    text
  }
}
`;

export const SIGN_UP = gql`
mutation signUp ( $username: String!, $password: String!) {
  createUser( user: {
    username: $username,
    password: $password
  }) {
    id
    username
  }
}
`;
