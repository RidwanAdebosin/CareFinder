import { render, screen, waitFor } from "@testing-library/react";
import LandingPage from "../../../components/LandingPage/LandingPage";

test("should render the landing page", async () => {
  // Mock the function for hospitalResult prop
  const hospitalResultMock = jest.fn();
  // Mock the function for hospitalResult prop
  const setHospitalResultMock = jest.fn();

  render(
    <LandingPage
      hospitalResult={hospitalResultMock}
      setHospitalResult={setHospitalResultMock}
    />
  );

  // get the element with the data-testid attribute
  await waitFor(() => {
    const LandingPageElemet = screen.getByTestId("landingpage");
    expect(LandingPageElemet).toBeInTheDocument();
  });
});
