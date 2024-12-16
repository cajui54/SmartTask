import useAxios from "../../hooks/useAxios";
import * as styled from "./styled";
const ListTaskComponent = () => {
  useAxios();
  return (
    <styled.ListTaskMain>
      <h2>Tarefas do Dia</h2>
      <ul>
        <li>
          <span>Wake Up at 7:00 AM</span>
        </li>
        <li>
          <span>Wake Up at 7:00 AM</span>
        </li>
      </ul>
    </styled.ListTaskMain>
  );
};

export default ListTaskComponent;
