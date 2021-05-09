import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../../../components/base/Button";


afterEach(() => cleanup())

function setup() {
  const label = "Test";
  const handleClick = jest.fn()
  const utils = render(<Button title={label} handleClick={handleClick} />)
  const clickSubmit = () => userEvent.click(utils.getByText(label))

  return {
    label,
    ...utils,
    clickSubmit,
    handleClick,
  };
}

function setupWithNoType() {
  const utils = setup();
  utils.clickSubmit();
  return utils;
}

test("renders <Button /> with label and no classes and allows to be clicked", () => {
  const { getByText, label, handleClick, container } = setupWithNoType();
  expect(getByText(label)).not.toBeNull();
  expect(container.className).toBeFalsy();
  expect(handleClick).toHaveBeenCalledTimes(1);
});

