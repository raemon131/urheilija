import { UrheilijaProvider } from "./context/UrheilijaContext";
import UrheilijaLomake from "./components/UrheilijaLomake";
import UrheilijaLista from "./components/UrheilijaLista";

function App() {
  return (
    <UrheilijaProvider>
      <h1>Urheilijat</h1>
      <UrheilijaLomake />
      <UrheilijaLista />
    </UrheilijaProvider>
  );
}

export default App;
