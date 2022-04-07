import { render } from "@testing-library/react";
import Button, { IButton } from "./Button";

describe("Button component", () => {
  it("should button mount", () => {
    const buttonProps: IButton = {
      label: "Test",
    };

    const { getByRole } = render(<Button {...buttonProps} />);

    expect(
      getByRole("button", { name: buttonProps.label })
    ).toBeInTheDocument();
  });

  it("should button disabled", () => {
    const buttonProps: IButton = {
      label: "Test",
      disabled: true,
    };

    const { getByRole } = render(<Button {...buttonProps} />);

    expect(getByRole("button", { name: buttonProps.label })).toHaveAttribute(
      "disabled"
    );
  });
});
