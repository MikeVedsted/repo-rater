import React from 'react';
import { render } from '@testing-library/react-native';

import RepositoryList from './RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryList', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      const { getAllByTestId } = render(<RepositoryList repositories={repositories} />);

      expect(getAllByTestId('repositoryName')).toHaveLength(2);
      expect(getAllByTestId('repositoryName')[0]).toHaveTextContent(repositories.edges[0].node.fullName);
      expect(getAllByTestId('repositoryName')[1]).toHaveTextContent(repositories.edges[1].node.fullName);

      expect(getAllByTestId('repositoryDescription')).toHaveLength(2);
      expect(getAllByTestId('repositoryDescription')[0]).toHaveTextContent(repositories.edges[0].node.description);
      expect(getAllByTestId('repositoryDescription')[1]).toHaveTextContent(repositories.edges[1].node.description);

      expect(getAllByTestId('repositoryLanguage')).toHaveLength(2);
      expect(getAllByTestId('repositoryLanguage')[0]).toHaveTextContent(repositories.edges[0].node.language);
      expect(getAllByTestId('repositoryLanguage')[1]).toHaveTextContent(repositories.edges[1].node.language);

      expect(getAllByTestId('repositoryCount')).toHaveLength(8);
      expect(getAllByTestId('repositoryCount')[0]).toHaveTextContent('21.9k');
      expect(getAllByTestId('repositoryCount')[1]).toHaveTextContent('1.6k');
      expect(getAllByTestId('repositoryCount')[2]).toHaveTextContent(repositories.edges[0].node.reviewCount);
      expect(getAllByTestId('repositoryCount')[3]).toHaveTextContent(repositories.edges[0].node.ratingAverage);
      expect(getAllByTestId('repositoryCount')[4]).toHaveTextContent('1.8k');
      expect(getAllByTestId('repositoryCount')[5]).toHaveTextContent(repositories.edges[1].node.forksCount);
      expect(getAllByTestId('repositoryCount')[6]).toHaveTextContent(repositories.edges[1].node.reviewCount);
      expect(getAllByTestId('repositoryCount')[7]).toHaveTextContent(repositories.edges[1].node.ratingAverage);
    });
  });
});