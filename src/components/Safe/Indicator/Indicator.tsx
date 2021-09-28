import styled from "styled-components";

import { useAppSelector } from "../../../utils/redux";

const Light = styled.div<{ locked: boolean }>`
  background-color: ${(props) => (props.locked ? "#940000" : "#008000")};
  border: 6px solid #000000;
  border-radius: 50%;
  height: 60px;
  margin: 40px auto 0;
  width: 60px;
`;

const Indicator = () => {
  const locked = useAppSelector((state) => state.safe.locked);

  return <Light locked={locked} />;
};

export default Indicator;
