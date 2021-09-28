import styled from "styled-components";

import { useAppSelector } from "../../../utils/redux";

const Light = styled.div<{ locked: boolean }>`
  background-color: ${(props) => (props.locked ? props.theme.lockedRed : props.theme.lockedGreen)};
  border: 3px solid ${(props) => props.theme.black};
  border-radius: 50%;
  height: 30px;
  margin: 20px auto 0;
  width: 30px;

  @media ${(props) => props.theme.deviceSizes.from.lg} {
    border-width: 6px;
    height: 60px;
    margin-top: 40px;
    width: 60px;
  }
`;

const Indicator = () => {
  const locked = useAppSelector((state) => state.safe.locked);

  return <Light aria-checked={locked} locked={locked} role="switch" />;
};

export default Indicator;
