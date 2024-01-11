import React from "react";

import { useSelector } from "react-redux";

import { render } from "@testing-library/react";

import App from "./App";

import tasks from "../fixtures/tasks";

jest.mock("react-redux");

describe("App", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks,
    })
  );

  it("renders tasks", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent("아무 일도 하기 싫다.");
  });
});
