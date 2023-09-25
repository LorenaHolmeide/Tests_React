//Alternativ 2
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch component', () => {
  it('displays the initial state correctly', () => {
    render(<Switch />);

    const initialText = screen.getByText('The switch is off');
    expect(initialText).toHaveTextContent('The switch is off');
  });

  it('toggles the switch when button is clicked', () => {
    render(<Switch />);

    const toggleButton = screen.getByText('Toggle Switch');
    fireEvent.click(toggleButton);

    const updatedText = screen.getByText('The switch is on');
    expect(updatedText).toHaveTextContent('The switch is on');

    fireEvent.click(toggleButton);

    const revertedText = screen.getByText('The switch is off');
    expect(revertedText).toHaveTextContent('The switch is off');
  });
});