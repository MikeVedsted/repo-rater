import { gql } from 'apollo-boost';

import { REPOSITORY_DETAILS, REVIEW_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query GetRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
      edges {
        node {
         ...RepositoryDetails
         reviews(first: 1) { 
           edges { 
            __typename
            node {
              ...ReviewDetails
              __typename
            }
             cursor
           }
           pageInfo {
            endCursor
            startCursor
            totalCount
            hasNextPage
            __typename
          }

          }
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
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
              fullName
              url
            }
            __typename
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
  ${REVIEW_DETAILS}
`;

export const GET_REPOSITORY = gql`
query Repository($id: ID!, $first: Int, $after: String) {
  repository(id: $id) {
    url
    ...RepositoryDetails
    reviews(first: $first, after: $after) {
      edges {
        __typename
        node {
          ...ReviewDetails
          __typename
        }
        cursor
        __typename
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
        __typename
      }
      __typename
    }
    __typename
  }
}
${REPOSITORY_DETAILS}
${REVIEW_DETAILS}
`;