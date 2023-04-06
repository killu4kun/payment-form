import { render } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<App />);
    const appElement = getByTestId("teste");
    expect(appElement).toBeInTheDocument();
  });
});
