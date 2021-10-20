import React from "react";
import { Item } from "../types/types";

type Props = {
  item: Item;
  toggleDone: () => void;
};

export default function TodoItem(props: Props) {
  const { id, task, tags, isDone } = props.item;
  const toggleDone = props.toggleDone;

  return (
    <li>
      <p onClick={toggleDone}>
        [{isDone ? "X" : ""}] - {task},{" "}
        <span>({tags.map((tag) => tag + " ")})</span>
      </p>
    </li>
  );
}
