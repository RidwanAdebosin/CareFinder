import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LandingPage from './LandingPage';

jest.mock('../../Data/hospitals', () => ({
  fetchHospitals: jest.fn(() => Promise.resolve([{ name: 'Hospital A' }, { name: 'Hospital B' }]))
}));

describe('LandingPage', () => {
  it('fetches hospitals when search button is clicked', async () => {
    const setHospitalResultMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <LandingPage hospitalResult={[]} setHospitalResult={setHospitalResultMock} />
    );
    
    const searchInput = getByPlaceholderText('📍 Your location...');
    const searchButton = getByText('Search');
    
    fireEvent.change(searchInput, { target: { value: 'New York' } });
    fireEvent.click(searchButton);
    
    await waitFor(() => {
      expect(setHospitalResultMock).toHaveBeenCalledWith([
        { name: 'Hospital A' },
        { name: 'Hospital B' }
      ]);
    });
  });
});
