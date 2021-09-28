import styled from "styled-components";

import { useAppSelector } from "../../../utils/redux";

export const ERROR_MESSAGE = "INVALID";

const PinDisplay = styled.div`
  font-family: "Segment14Regular";
  font-size: 80px;
  height: 80px;
  line-height: 1;
  margin: 0;
  text-align: center;
  user-select: none;
`;

const Wrapper = styled.div`
  background-color: #9ea18c;
  border: 8px solid #000000;
  border-radius: 20px;
  box-shadow: inset 0 0 12px #333333;
  padding: 20px;
`;

const Display = () => {
  const error = useAppSelector((state) => state.safe.error);
  const pin = useAppSelector((state) => state.safe.pin);

  return (
    <Wrapper>
      <PinDisplay>{error ? ERROR_MESSAGE : pin}</PinDisplay>
    </Wrapper>
  );
};

export default Display;
