import React, { useState } from "react";
import { Button, Input, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addThing, deleteThing, toggleThing } from "@/store/thingsSlice";
const TodoRedux: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const things = useSelector((state: RootState) => state.things.things);
  const dispatch = useDispatch();

  const handleAddThings = () => {
    if (content.trim()) {
      dispatch(addThing(content));
      setContent("");
    }
  };

  const handleToggleComplete = (id: string) => {
    dispatch(toggleThing(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteThing(id));
  };

  return (
    <>
      <Input
        placeholder="請輸入待辦事項"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={handleAddThings} disabled={content.trim() === ""}>
        新增待辦事項
      </Button>
      總代辦事項數量: {things.length}
      <List
        bordered
        dataSource={things}
        renderItem={(thing) => (
          <List.Item
            actions={[
              <Button
                type="link"
                onClick={() => handleToggleComplete(thing.id)}
              >
                {thing.done ? "Undo" : "Complete"}
              </Button>,
              <Button
                type="link"
                danger
                onClick={() => handleDeleteTodo(thing.id)}
              >
                Delete
              </Button>,
            ]}
          >
            <span
              style={{ textDecoration: thing.done ? "line-through" : "none" }}
            >
              {thing.text}
            </span>
          </List.Item>
        )}
      />
    </>
  );
};

export default TodoRedux;
