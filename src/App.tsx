import { useNavigate } from "react-router";
import * as styled from "./App.css";
import ListTaskComponent from "./components/list-task";
import TitleComponent from "./components/title";
function App() {
  const navigate = useNavigate();
  return (
    <styled.MainApp>
      <TitleComponent title="Smart Task" subtitle="Gerencie suas tarefas" />
      <styled.ButtonContainer>
        <button onClick={() => navigate("/pages/form-create")}>
          Criar Nova Tarefa
        </button>
      </styled.ButtonContainer>

      <ListTaskComponent />
    </styled.MainApp>
  );
}

export default App;
