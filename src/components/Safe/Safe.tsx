import styled from "styled-components";

import Display from "./Display";
import Indicator from "./Indicator";
import NumPad from "./NumPad";

const DisplayWrapper = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  background-color: #2a3f54;
  display: flex;
  gap: 120px;
  margin: 0 auto;
  max-width: 1400px;
  padding: 40px 40px 40px 80px;
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
