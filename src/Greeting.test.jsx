import { render, screen } from "@testing-library/react";
import Greeting from "@/Greeting";

test("renders greeting message", () => {
  render(<Greeting name="World" />);
  expect(screen.getByText("Hello, World!")).toBeInTheDocument();
});
