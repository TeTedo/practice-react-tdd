import React from "react";

export default function List({ tasks, onClickDelete }) {
  if (tasks.length === 0) {
    return <p>할 일이 없어요.</p>;
  }
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button type="button" onClick={() => onClickDelete(task.id)}>
              완료
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
