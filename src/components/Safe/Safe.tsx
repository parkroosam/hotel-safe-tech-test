import styled from "styled-components";

import Display from "./Display";
import Indicator from "./Indicator";
import NumPad from "./NumPad";

const DisplayWrapper = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.safeBg};
  border-radius: 12px;
  box-shadow: 3px 3px 6px ${(props) => props.theme.black};
  box-sizing: border-box;
  display: flex;
  flex-flow: column-reverse;
  left: 50%;
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;

  @media ${(props) => props.theme.deviceSizes.from.md} {
    max-width: 500px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media ${(props) => props.theme.deviceSizes.from.lg} {
    flex-flow: row;
    gap: 120px;
    padding: 40px 40px 40px 80px;
    max-width: 1400px;
  }
`;

const Safe = () => {
  return (
    <Wrapper>
      <NumPad />
      <DisplayWrapper>
        <Display />
        <Indicator />
      </DisplayWrapper>
    </Wrapper>
  );
};

export default Safe;
