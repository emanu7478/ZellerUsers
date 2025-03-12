import React from 'react';
import { render } from '@testing-library/react-native';
import UserList from './UserList';

const mockUsers = [
  { id: '1', name: 'John Smith', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Adam Muller', email: 'adam@example.com', role: 'Admin' },
];

describe('UserList', () => {
  it('renders a list of users', () => {
    const { getByText } = render(<UserList users={mockUsers} />);
    expect(getByText('John Smith')).toBeTruthy();
    expect(getByText('Adam Muller')).toBeTruthy();
  });
});
