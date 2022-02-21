import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Tag from "./Tag";
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
  const [filterTags, setFilterTags] = useState<string[]>([]);

  const tags = Array.from(new Set(todoList.map((list) => list.tags).flat()));

  const addOrRemoveTagToFilter = (tag: string) => {
    if (filterTags.includes(tag)) {
      const tagsToKeep = filterTags.filter((eachTag) => eachTag !== tag);
      setFilterTags(tagsToKeep);
    } else {
      setFilterTags([...filterTags, tag]);
    }
  };

  function toggleDone(id: number) {
    const updatedList = todoList.map((item) => {
      return item.id !== id ? item : { ...item, isDone: !item.isDone };
    });
    setTodoList(updatedList);
  }

  const filteredList = filterTags.length
    ? [
        ...todoList.filter((list) =>
          list.tags.find((tag) => filterTags.includes(tag))
        ),
      ]
    : [...todoList];

  return (
    <div>
      Tags:{" "}
      {tags.map((tag, index) => (
        <Tag
          key={index}
          tag={tag}
          addOrRemoveTagToFilter={() => addOrRemoveTagToFilter(tag)}
        />
      ))}
      <ul style={{ listStyle: "none" }}>
        {filteredList.map((item) => {
          const { id } = item;
          return (
            <TodoItem key={id} item={item} toggleDone={() => toggleDone(id)} />
          );
        })}
      </ul>
    </div>
  );
}
