import { Box, List, ListItem, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat";
import EditCat from "./EditCat";
import DeleteCat from "./DeleteCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [editingCat, setEditingCat] = useState<Cat | null>(null);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:3000/cats");
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box>
      <Typography variant="h1">Cats</Typography>

      {editingCat && (
        <EditCat
          cat={editingCat}
          onSave={() => {
            setEditingCat(null);
            fetchCats();
          }}
          onCancel={() => setEditingCat(null)}
        />
      )}

      <List>
        {cats.map((cat) => (
          <ListItem key={cat.id}>
            {JSON.stringify(cat)}
            <Button onClick={() => setEditingCat(cat)}>Edit</Button>
            <DeleteCat catId={cat.id} onDelete={fetchCats} />
          </ListItem>
        ))}
      </List>

      <SubmitCat fetchCats={fetchCats} />
    </Box>
  );
};

export default Cats;
