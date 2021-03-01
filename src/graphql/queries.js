import { gql } from 'apollo-boost';

import { REPOSITORY_DETAILS, REVIEW_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
         ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const CHECK_AUTH = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
query Repository($id: ID!) {
  repository(id: $id) {
    url
    ...RepositoryDetails
    reviews {
      edges {
        node {
          ...ReviewDetails
        }
      }
    }
  }
}
${REPOSITORY_DETAILS}
${REVIEW_DETAILS}
`;

