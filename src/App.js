import "./App.css";
import HeaderSection from "./components/HeaderSection/index";
import Menu from "./components/PopularMenu/Menu";
import SignUp from "./components/SignUpSection/SignUp";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <HeaderSection />
      <SignUp />
      <Menu />
    </CartProvider>
  );
}

export default App;
