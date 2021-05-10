import { cleanup, screen, render } from "@testing-library/react";
import { FormItem } from "../../../components/base/FormItem";

afterEach(() => cleanup());

function setup(isSrOnly = false, required = false) {
  const label = "Test";
  const utils = render(
    <FormItem label={label} isSrOnly={isSrOnly} required={required}>
      <input data-testid="test" id="test" />
    </FormItem>
  );

  return {
    label,
    ...utils,
  };
}

function setupWithNoRequiredFields() {
  const utils = setup(true);
  return utils;
}

function setupWithRequiredFields() {
  const utils = setup(false, true);
  return utils;
}

test("renders <FormItem /> assigns the htmlFor and renders the label hidden.", () => {
  const { getByLabelText, label, getByTestId } = setupWithNoRequiredFields();
  expect(getByLabelText(label)).not.toBeNull();
  expect(getByTestId("test")).not.toBeNull();
});

test("renders <FormItem /> with the field marked as required.", () => {
  const { container } = setupWithRequiredFields();
  expect(container.querySelector('.text-red-400')).not.toBeNull()
});
