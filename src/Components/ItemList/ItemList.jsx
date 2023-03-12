import React from "react";
import Item from "../Item/Item";

function ItemList({ items }) {
  return (
    <div
      style={{
        padding: "0 40px 0 40px",
        background: "#f9f7f1",
        display: "flex",
        width: "100%",
        height: "90vh",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
}

export default ItemList;
