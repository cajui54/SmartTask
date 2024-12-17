import * as styled from "./styled";
interface MessageProps {
  message: string;
  type: "success" | "error" | "";
}
const MessageComponent = ({ message, type }: MessageProps) => {
  return <styled.MessageStyled $type={type}>{message}</styled.MessageStyled>;
};

export default MessageComponent;
