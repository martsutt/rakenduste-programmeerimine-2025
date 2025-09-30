import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

type EditCatProps = {
  cat: Cat;
  onSave: () => void;
  onCancel: () => void;
};

const EditCat: React.FC<EditCatProps> = ({ cat, onSave, onCancel }) => {
  const [editName, setEditName] = useState(cat.name);

  const updateCat = async () => {
    await fetch(`http://localhost:3000/cats/${cat.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: editName }),
    });
    onSave();
  };

  return (
    <Box>
      <TextField
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />
      <Button onClick={updateCat}>Save</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </Box>
  );
};

export default EditCat;
