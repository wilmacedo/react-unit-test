import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  it("should render list coins", () => {
    const { getByText } = render(<App />);

    expect(getByText("KLV")).toBeInTheDocument();
    expect(getByText("ETH")).toBeInTheDocument();
    expect(getByText("BTC")).toBeInTheDocument();
  });

  it("should be able to add new coin to the list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<App />);
    const user = userEvent.setup();

    const input = getByPlaceholderText("New coin");
    const button = getByText("Add");
    const expectedText = "BSC";

    await user.type(input, expectedText);
    await user.click(button);

    expect(await findByText(expectedText)).toBeInTheDocument();
  });
});
