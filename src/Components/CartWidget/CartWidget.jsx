import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div style={{ width: "20vh" }}>
      <span>0</span>
      <BsFillCartCheckFill size={30} title={"Carrito"} color={"#94b2a6"} />
    </div>
  );
};

export default CartWidget;
