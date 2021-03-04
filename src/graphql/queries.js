import { gql } from 'apollo-boost';

import { REPOSITORY_DETAILS, REVIEW_DETAILS, REVIEW_PAGE_INFO, REPOSITORIES_PAGE_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  query GetRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
      edges {
        node {
         ...RepositoryDetails
         reviews(first: 1) { 
           edges { 
            node {
              ...ReviewDetails
            }
             cursor
           }
          ...ReviewPageInfo
          }
        }
        cursor
      }
      ...RepositoriesPageInfo
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  ${REVIEW_PAGE_INFO}
  ${REPOSITORIES_PAGE_INFO}
`;

export const CHECK_AUTH = gql`
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails
            repository {
              id
              fullName
            }
          }
          cursor
        }
        ...ReviewPageInfo
      }
    }
  }
  ${REVIEW_DETAILS}
  ${REVIEW_PAGE_INFO}
`;

export const GET_REPOSITORY = gql`
query Repository($id: ID!, $first: Int, $after: String) {
  repository(id: $id) {
    ...RepositoryDetails
    url
    reviews(first: $first, after: $after) {
      edges {
        node {
          ...ReviewDetails
        }
        cursor
      }
      ...ReviewPageInfo
    }
  }
}
${REPOSITORY_DETAILS}
${REVIEW_DETAILS}
${REVIEW_PAGE_INFO}
`;