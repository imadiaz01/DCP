import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  it('displays appropriate alerts for missing required fields', async () => {
    // Mock the window.alert function
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<BookingForm onClose={() => {}} />);

    // Wait for the component to fetch data and render
    await screen.findByLabelText('Booking Date:');

    fireEvent.click(screen.getByText('Submit'));

    // Check for alerts based on missing fields
    expect(mockAlert).toHaveBeenCalledWith(
      'Please enter your name.\nPlease enter your email.\nSelected booking date is not available.\nPlease select a time for your reservation.'
    );

    // Restore the original window.alert function
    mockAlert.mockRestore();
  });
});
