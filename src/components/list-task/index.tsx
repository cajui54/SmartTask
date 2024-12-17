import useAxios from "../../hooks/useAxios";
import LoadingComponent from "../loading";
import * as styled from "./styled";
const ListTaskComponent = () => {
  const { tasks, isLoading } = useAxios();
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
              </li>
            ))
          ) : (
            <li>
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
