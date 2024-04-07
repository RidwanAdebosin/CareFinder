import { render, screen } from "@testing-library/react";
// Import ButtonProps interface from Button file
import { Button } from "../src/assets/Button";

import { describe, it } from "vitest";

describe("Button", () => {
  it("renders button component", () => {
    // Mocking onClick function
    const onClickMock = vitest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});
