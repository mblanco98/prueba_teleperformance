import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "../../../components/base/Form";

afterEach(() => cleanup());

function setup() {
  const handleSubmit = jest.fn();
  const utils = render(<Form handleOnSubmit={handleSubmit}><input data-testid="input" /> </Form>);
  const typeSubmit = () => userEvent.type(utils.getByTestId('input'), "{enter}");

  return {
    ...utils,
    typeSubmit,
    handleSubmit,
  };
}

function setupSubmitForm() {
  const utils = setup();
  utils.typeSubmit();
  return utils;
}

function setupWithoutSubmitForm() {
  const utils = setup();
  return utils;
}

test("renders <Form /> and allows to be submitted", () => {
  const { handleSubmit } = setupSubmitForm();
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test("renders <Form /> without submitting form is not being called", () => {
  const { handleSubmit } = setupWithoutSubmitForm();
  expect(handleSubmit).toHaveBeenCalledTimes(0);
});
