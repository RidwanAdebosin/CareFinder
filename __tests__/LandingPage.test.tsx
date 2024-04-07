import { render, screen, waitFor } from "@testing-library/react";
import LandingPage from "../src/components/LandingPage/LandingPage";

import { describe, it } from "vitest";

describe("should render the landing page", () => {
  it("renders landingpage component", async () => {
    // Mock the function for hospitalResult prop
    const hospitalResultMock = vitest.fn();
    // Mock the function for setHospitalResult prop
    const setHospitalResultMock = vitest.fn();

    render(
      <LandingPage
        hospitalResult={hospitalResultMock}
        setHospitalResult={setHospitalResultMock}
      />
    );

    await waitFor(() => {
      const landingPageElement = screen.getByTestId("landingpage");
      expect(landingPageElement).toBeInTheDocument();
    });
  });
});
