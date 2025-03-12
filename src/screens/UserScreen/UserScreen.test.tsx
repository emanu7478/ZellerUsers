// src/screens/UserScreen/UserScreen.test.tsx
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import UserScreen from './UserScreen';
import {LIST_ZELLER_CUSTOMERS} from '../../graphql/queries';

const mocks = [
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
      variables: {filter: {role: {eq: 'Admin'}}},
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [
            {
              id: '1',
              name: 'John Smith',
              email: 'john@example.com',
              role: 'Admin',
            },
          ],
          nextToken: null,
        },
      },
    },
  },
];

describe('UserScreen', () => {
  it('renders users after fetching', async () => {
    const {findByText} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserScreen />
      </MockedProvider>,
    );
    const userName = await findByText('John Smith');
    expect(userName).toBeTruthy();
  });

  it('switches role filter', async () => {
    const {getByText} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserScreen />
      </MockedProvider>,
    );
    fireEvent.press(getByText('Manager'));
    expect(getByText('Manager Users')).toBeTruthy();
  });
});
