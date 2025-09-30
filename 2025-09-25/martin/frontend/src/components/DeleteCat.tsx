import { Button } from "@mui/material";
import React from "react";

type DeleteCatProps = {
  catId: string;
  onDelete: () => void;
};

const DeleteCat: React.FC<DeleteCatProps> = ({ catId, onDelete }) => {
  const deleteCat = async () => {
    await fetch(`http://localhost:3000/cats/${catId}`, {
      method: "DELETE",
    });
    onDelete();
  };

  return <Button onClick={deleteCat}>Delete</Button>;
};

export default DeleteCat;
