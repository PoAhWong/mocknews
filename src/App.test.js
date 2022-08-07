import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./index";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText("MOCKNEWS");
  expect(linkElement).toBeInTheDocument();
});
