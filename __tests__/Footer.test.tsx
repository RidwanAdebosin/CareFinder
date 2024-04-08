import { render, screen } from "@testing-library/react";
import Footer from "../src/components/Footer/Footer";
import React from "react";

import { describe, it, expect } from "vitest";

describe("Footer", () => {
  it("renders Footer component on all pages", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toBeDefined();
  });
});
