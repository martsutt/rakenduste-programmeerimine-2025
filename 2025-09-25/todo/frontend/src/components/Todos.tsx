import { Box, List, ListItem, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import SubmitTodo from "./SubmitTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

type Todo = {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Box>
      <Typography variant="h1">Todos</Typography>

      {editingTodo && (
        <EditTodo
          todo={editingTodo}
          onSave={() => {
            setEditingTodo(null);
            fetchTodos();
          }}
          onCancel={() => setEditingTodo(null)}
        />
      )}

      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            {JSON.stringify(todo)}
            <Button onClick={() => setEditingTodo(todo)}>Edit</Button>
            <DeleteTodo todoId={todo.id} onDelete={fetchTodos} />
          </ListItem>
        ))}
      </List>

      <SubmitTodo fetchTodos={fetchTodos} />
    </Box>
  );
};

export default Todos;
