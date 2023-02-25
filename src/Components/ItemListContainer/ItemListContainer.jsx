import React from "react";

const ItemListContainer = (greeting) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>{greeting.msn}</h1>
    </div>
  );
};

export default ItemListContainer;
