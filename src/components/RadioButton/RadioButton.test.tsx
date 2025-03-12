import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  it('renders correctly with label and selected state', () => {
    const { getByText } = render(<RadioButton label="Admin" selected={true} onPress={() => {}} />);
    expect(getByText('Admin')).toBeTruthy();
  });

  it('calls onPress when clicked', () => {
    const onPress = jest.fn();
    const { getByText } = render(<RadioButton label="Admin" selected={false} onPress={onPress} />);
    fireEvent.press(getByText('Admin'));
    expect(onPress).toHaveBeenCalled();
  });
});
