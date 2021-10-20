import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Item } from "../types/types";

export default function TodoList() {
  const [todoList, setTodoList] = useState<Item[]>([
    {
      id: 1,
      task: "Study",
      tags: ["React", "Typescript"],
      isDone: false,
    },
    {
      id: 2,
      task: "Prepare for the assessment",
      tags: ["React", "NodeJs"],
      isDone: false,
    },
    {
      id: 3,
      task: "Practice CSS",
      tags: ["Styling"],
      isDone: false,
    },
  ]);

  function toggleDone(id: number) {
    console.log("Getting here", id);
    const updatedList = todoList.map((item) => {
      return item.id !== id ? item : { ...item, isDone: !item.isDone };
    });
    setTodoList(updatedList);
  }

  console.log("The Todo List", todoList);
  return (
    <div>
      <ul>
        {todoList.map((item) => {
          const { id, task, tags, isDone } = item;
          return (
            <TodoItem key={id} item={item} toggleDone={() => toggleDone(id)} />
          );
        })}
      </ul>
    </div>
  );
}
