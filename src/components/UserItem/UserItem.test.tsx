// src/components/UserItem/UserItem.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import UserItem from './UserItem';

const mockUser = { id: '1', name: 'John Smith', email: 'john@example.com', role: 'Admin' };

describe('UserItem', () => {
  it('renders user name and role', () => {
    const { getByText } = render(<UserItem user={mockUser} />);
    expect(getByText('John Smith')).toBeTruthy();
    expect(getByText('Admin')).toBeTruthy();
  });
});
