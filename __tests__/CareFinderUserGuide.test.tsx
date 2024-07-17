import { render, screen } from "@testing-library/react";
import CareFinderUserGuide from "../src/components/CareFinder/CareFinderUserGuide";
import React from "react";

import { describe, expect, it } from "vitest";

describe("CareFinder", () => {
  it("CareFinder User Guide rendered on the landing ");
  render(<CareFinderUserGuide />);
  expect(screen.getByTestId("Carefinder-User-Guide")).toBeDefined();
});
