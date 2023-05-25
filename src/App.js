import "./App.css";
import { Menu } from "./Menu";

const App = () => {
  const menu = ["Úvod", "O nás", "Kontakt"];
  return <Menu menu={menu} nadpis="ReactGirls" />;
};

export default App;
