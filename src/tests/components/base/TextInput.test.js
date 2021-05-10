import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputText } from "../../../components/base/InputText";

function setup() {
  const utils = render(<InputText />);
  const value = {
    withErrors: '144e4fd',
    withoutErrors: 'ddfdfserwradd',
  }
  const handleOnPaste = (v) => userEvent.paste(utils.container, v);
  const handleOnChange = (v) => userEvent.change(utils.container, v)

  return {
    value,
    ...utils,
    handleOnPaste,
    handleOnChange,
  }
}

function setupWithErrors() {
  const utils = setup()
  utils.handleOnChange(utils.value.withErrors)
  return utils
}

function setupWithoutErrors() {
  const utils = setup()
  utils.handleOnChange(utils.value.withoutErrors);
  return utils
}


test.skip("Renders value correctly when input doesn't have errors", () => {
  const { container } = setupWithoutErrors()
  
});
