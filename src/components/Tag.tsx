import React from "react";

type Props = {
  tag: string;
  addOrRemoveTagToFilter: () => void;
};

export default function Tag(props: Props) {
  const { tag, addOrRemoveTagToFilter } = props;
  return (
    <button style={{ margin: "0 5px" }} onClick={addOrRemoveTagToFilter}>
      {tag}
    </button>
  );
}
