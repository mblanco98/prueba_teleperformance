import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputNumber } from "../../../components/base/InputNumber";

function setup() {
  const value = {
    withErrors: "144e4fd",
    withoutErrors: "4.42",
  };
  const handleOnPaste = (v) => userEvent.paste(utils.container, v);
  const handleOnChange = (v) => userEvent.type(utils.container, v);
  const utils = render(<InputNumber inputValue="" handleOnChange={handleOnChange} />);

  return {
    value,
    ...utils,
    handleOnPaste,
    handleOnChange,
  };
}

function setupWithErrors() {
  const utils = setup();
  utils.handleOnChange(utils.value.withErrors);
  return utils;
}

function setupWithoutErrors() {
  const utils = setup();
  utils.handleOnChange(utils.value.withoutErrors);
  return utils;
}

test("Renders value correctly when input doesn't have errors", () => {
  const { container, getByTestId } = setupWithoutErrors();
  expect(getByTestId("input_element").placeholder).toBeFalsy();
  console.log(container.nodeValue)
  expect(container.nodeValue).toBe(4.42)
});
