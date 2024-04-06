
import {render, screen} from '@testing-library/react';
import LandingPage from '../LandingPage';

test('should render the landing page', () => {
    // Mock the function for hospitalResult prop
    const hospitalResultMock = jest.fn() ;
    // Mock the function for hospitalResult prop
    const setHospitalResultMock = jest.fn()

    render(<LandingPage hospitalResult={hospitalResultMock} setHospitalResult={setHospitalResultMock} />);
  
    // get the element with the data-testid attribute
    const LandingPageElemet = screen.getByTestId('landingpage-1');
  
    expect(LandingPageElemet).toBeInTheDocument();
  });