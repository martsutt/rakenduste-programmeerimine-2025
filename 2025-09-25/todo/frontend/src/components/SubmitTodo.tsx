import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

type SubmitTodoProps = {
  fetchTodos: () => void;
};

const SubmitTodo = ({ fetchTodos }: SubmitTodoProps) => {
  const [title, setTitle] = useState("");

  const submitTodo = async () => {
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchTodos();
  };

  return (
    <Box>
      <TextField
        label="Todo title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Button onClick={submitTodo}>Add Todo</Button>
    </Box>
  );
};

export default SubmitTodo;
