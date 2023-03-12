import { useState } from "react";
import Button from "@mui/material/Button";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h2>{contador}</h2>

      <Button
        size="small"
        variant="contained"
        color="secondary"
        sx={{ background: "#9b2226", marginLeft: "10px" }}
        onClick={sumar}
      >
        Sumar
      </Button>

      <Button
        size="small"
        variant="contained"
        color="secondary"
        sx={{ background: "#9b2226", marginLeft: "10px" }}
        onClick={restar}
      >
        Restar
      </Button>

      <Button
        size="small"
        variant="contained"
        color="secondary"
        sx={{ background: "#9b2226", marginLeft: "10px" }}
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
