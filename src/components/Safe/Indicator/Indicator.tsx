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

/**
 * An indicator light acting as a visual identifier for the locked state of the safe.
 */
const Indicator = () => {
  const locked = useAppSelector((state) => state.safe.locked);

  // We use data-locked here to identify whether the safe is currently locked or not.
  // Given more time, I would verify the state of the visual indicator using an E2E visual regression test.
  return <Light data-locked={locked} data-testid="indicator-light" locked={locked} />;
};

export default Indicator;
