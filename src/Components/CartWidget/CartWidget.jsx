import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <BsFillCartCheckFill size={24} title={"Carrito"} color={"white"} />
      </Link>
    </div>
  );
};

export default CartWidget;
