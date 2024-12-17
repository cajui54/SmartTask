import { RiDeleteBin6Line } from "react-icons/ri";
import useAxios from "../../hooks/useAxios";
import LoadingComponent from "../loading";
import * as styled from "./styled";
const ListTaskComponent = () => {
  const { tasks, isLoading, deleteTask } = useAxios();
  const handleDelete = (id: string) => {
    if (window.confirm("Você tem certeja que deseja excluir está tarefa?")) {
      deleteTask(id);
    }
  };
  return (
    <styled.ListTaskMain>
      <h2>Tarefas do Dia</h2>

      {!isLoading ? (
        <ul>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <li key={task._id}>
                <div>
                  <span>{task.title}</span>
                  <span>{task.description}</span>
                </div>
                <button onClick={() => handleDelete(task._id)}>
                  <RiDeleteBin6Line />
                  <span>Excluir</span>
                </button>
              </li>
            ))
          ) : (
            <li className="info">
              <span>Não há tarefas ainda.</span>
            </li>
          )}
        </ul>
      ) : (
        <LoadingComponent />
      )}
    </styled.ListTaskMain>
  );
};

export default ListTaskComponent;
