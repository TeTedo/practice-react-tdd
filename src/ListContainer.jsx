import React from "react";

import List from "./List";
import { useDispatch, useSelector } from "react-redux";

import { deleteTask } from "./actions";

export default function ListContainer() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  function handleClick(id) {
    dispatch(deleteTask(id));
  }

  return (
    <div>
      <h1>To-do</h1>
      <List tasks={tasks} onClickDelete={handleClick} />
    </div>
  );
}
