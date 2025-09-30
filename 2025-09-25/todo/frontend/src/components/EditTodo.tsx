import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

type Todo = {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

type EditTodoProps = {
  todo: Todo;
  onSave: () => void;
  onCancel: () => void;
};

const EditTodo: React.FC<EditTodoProps> = ({ todo, onSave, onCancel }) => {
  const [title, setTitle] = useState(todo.title);

  const updateTodo = async () => {
    await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    onSave();
  };

  return (
    <Box>
      <TextField value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button onClick={updateTodo}>Save</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </Box>
  );
};

export default EditTodo;
