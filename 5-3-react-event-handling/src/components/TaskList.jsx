import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {tasks.length === 0 ? (
        <p>No tasks to display</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} id={task.id} text={task.text} onDelete={onDelete} />
        ))
      )}
    </ul>
  );
}
