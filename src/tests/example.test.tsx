// Vendors
import { render, screen } from "@testing-library/react";
// Views
import App from "../App";

describe("This is an example that the Vitest dependency works", () => {
  it("making a simple sum check", () => {
    const result = 1 + 1;
    expect(result).toBe(2);
  });

  it("should render App.tsx and return true", () => {
    render(<App />);
    expect(screen.getByTestId("app-test-id")).toBeInTheDocument();
  });
});
