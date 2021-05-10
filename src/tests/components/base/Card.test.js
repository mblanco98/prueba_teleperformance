import { render, cleanup } from "@testing-library/react";
import { Card } from "../../../components/base/Card";

afterEach(() => cleanup());

function setup(children, title = "Test") {
  const utils = render(<Card title={title}>{children}</Card>);
  return {
    ...utils,
    title,
  };
}

function setupWithNoChildren() {
  const utils = setup();
  return utils;
}

function setupWithChildren() {
  const utils = setup(<div data-testid="children">children</div>);
  return utils;
}

function setupWithChildrenNoTitle() {
  const utils = setup(<div data-testid="children">children</div>, '');
  return utils;
}

test("renders <Card /> with no children, but title is present", () => {
  const { container } = setupWithNoChildren();
  expect(container).not.toBeUndefined();
  expect(container.querySelector(".card_title")).not.toBeUndefined();
  expect(container.querySelector(".card_body").innerHTML).toBeFalsy();
});

test("renders <Card /> with children, and title present", () => {
  const { container } = setupWithChildren();
  expect(container).not.toBeUndefined();
  expect(container.querySelector(".card_title")).not.toBeUndefined();
  expect(container.querySelector(".card_body").innerHTML).not.toBeFalsy();
});

test("renders <Card /> with children, and no title present", () => {
  const { container } = setupWithChildrenNoTitle();
  expect(container).not.toBeUndefined();
  expect(container.querySelector(".card_title")).not.toBeUndefined();
  expect(container.querySelector(".card_title").innerHTML).toBe('');
  expect(container.querySelector(".card_body").innerHTML).not.toBeFalsy();
});

