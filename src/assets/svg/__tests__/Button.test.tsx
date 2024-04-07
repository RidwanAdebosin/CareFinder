import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

test("should render button component", () => {
  const onClickMock = jest.fn();
  // const childrenMock = jest.fn();

  render(<Button onClick={onClickMock} />);
  const buttonElement = screen.getByTestId("button");
  expect(buttonElement).toBeInTheDocument();
});
