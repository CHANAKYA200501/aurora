import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Aurora 2.0 dashboard header", () => {
  render(<App />);
  const headerText = screen.getByText(
    /Aurora 2.0 – Mining Activity Monitoring Dashboard/i
  );
  expect(headerText).toBeInTheDocument();
});