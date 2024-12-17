import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as styled from "./styled";
const LoadingComponent = () => {
  return (
    <styled.LoadingContainer>
      <AiOutlineLoading3Quarters className="loadingSpin" />
      <p>Loading...</p>
    </styled.LoadingContainer>
  );
};

export default LoadingComponent;
