import styled from "styled-components";

import { useAppSelector } from "../../../utils/redux";

export const ERROR_MESSAGE = "INVALID";

const PinDisplay = styled.div`
  font-family: "Segment14Regular";
  font-size: 48px;
  height: 48px;
  line-height: 1;
  margin: 0;
  text-align: center;
  user-select: none;

  @media ${(props) => props.theme.deviceSizes.from.lg} {
    font-size: 80px;
    height: 80px;
  }
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.displayBg};
  border: 6px solid ${(props) => props.theme.black};
  border-radius: 20px;
  box-shadow: inset 0 0 12px ${(props) => props.theme.shadowGrey};
  padding: 12px;

  @media ${(props) => props.theme.deviceSizes.from.lg} {
    border-width: 8px;
    padding: 20px;
  }
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
