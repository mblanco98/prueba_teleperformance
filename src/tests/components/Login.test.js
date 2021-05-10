import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "../../components/Login";

function setup() {
  const handleClick = jest.fn();
  const utils = render(<Login />);
  const user = {
    valid: "",
    empty: "",
    notAllowed: "",
  };
  const clickSubmit = () => userEvent.click(utils.getByText("Continue"));
  const changeNitInput = (value) =>
    userEvent.type(utils.getByLabelText(/nit/i), value);
  return {
    user,
    ...utils,
    clickSubmit,
    handleClick,
    changeNitInput,
  };
}

function setupFailureWithNoNit() {
  const utils = setup();
  utils.changeNitInput(utils.user.errorEmpty);
  utils.clickSubmit();
  return utils;
}

function setupFailureWithNonAllowedNit() {
  const utils = setup();
  utils.changeNitInput(utils.user.errorNotAllowed);
  utils.clickSubmit()
  return utils;
}

test.skip("renders the <Login />", () => {
  const { queryByTestId } = render(<Login />);
  expect(queryByTestId("login-container")).toBeInTheDocument();
});
