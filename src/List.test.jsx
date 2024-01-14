import React from "react";

import { render, fireEvent } from "@testing-library/react";

import List from "./List";

// with tasks
// renders tasks

// without tasks
// renders no task message

describe("List", () => {
  const handleClick = jest.fn();

  function renderList(tasks) {
    return render(<List tasks={tasks} onClickDelete={handleClick} />);
  }

  context("with tasks", () => {
    const tasks = [
      { id: 1, title: "아무 일도 하기 싫다." },
      { id: 2, title: "건물 매입" },
    ];

    const { container } = renderList(tasks);

    it("renders tasks", () => {
      expect(container).toHaveTextContent("아무 일도 하기 싫다.");
      expect(container).toHaveTextContent("건물 매입");
    });

    it("renders '완료' buttons to delete a task ", () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText("완료");

      expect(handleClick).not.toBeCalled();

      fireEvent.click(buttons[0]);

      expect(handleClick).toBeCalledWith(1);
    });
  });

  context("without tasks", () => {
    it("renders no tasks", () => {
      const tasks = [];
      const { container } = renderList(tasks);

      expect(container).toHaveTextContent("할 일이 없어요.");
    });
  });
});
