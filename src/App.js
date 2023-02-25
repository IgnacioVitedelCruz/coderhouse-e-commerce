import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer
        msn={"Props: Bienvenido a la pagina de Ignacio Vite de la Cruz"}
      />
    </div>
  );
}

export default App;
