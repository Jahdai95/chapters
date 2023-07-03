import "./App.css";
import MainRouter from "./router/MainRouter/MainRouter";
import { BooksProvider } from "./context/BooksContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BooksProvider>
        <CartProvider>
          <MainRouter />
        </CartProvider>
      </BooksProvider>
    </div>
  );
}

export default App;
