import { Button } from "@mui/material";

type DeleteTodoProps = {
  todoId: string;
  onDelete: () => void;
};

const DeleteTodo: React.FC<DeleteTodoProps> = ({ todoId, onDelete }) => {
  const deleteTodo = async () => {
    await fetch(`http://localhost:3000/todos/${todoId}`, {
      method: "DELETE",
    });
    onDelete();
  };

  return <Button onClick={deleteTodo}>Delete</Button>;
};

export default DeleteTodo;
