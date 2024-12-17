import * as styled from "./styled";
interface TitleProps {
  title: string;
  subtitle: string;
}

const TitleComponent = ({ title, subtitle }: TitleProps) => {
  return (
    <styled.TitleMain>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </styled.TitleMain>
  );
};

export default TitleComponent;
