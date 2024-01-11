import React from "react";

export default function List({ tasks }) {
  return (
    <div>
      <h1>To-do</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
