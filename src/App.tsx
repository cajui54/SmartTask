import * as styled from "./App.css";
import ListTaskComponent from "./components/list-task";
import TitleComponent from "./components/title";
function App() {
  return (
    <styled.MainApp>
      <TitleComponent />
      <button>Criar Nova Tarefa</button>
      <ListTaskComponent />
    </styled.MainApp>
  );
}

export default App;
