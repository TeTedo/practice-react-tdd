import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import ListContainer from "./ListContainer";

import { setTasks } from "./actions";

import tasks from "../fixtures/tasks";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, []);
  return (
    <div>
      <ListContainer />
    </div>
  );
}
