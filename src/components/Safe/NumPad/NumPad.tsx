import { useDispatch } from "react-redux";
import styled from "styled-components";

import { clear, enter, pressNumber } from "../../../store/slices/safe";

const NUMERIC_BUTTON_NUM = 9;

const Button = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  padding: 12px 0;
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.numpadBg};
  border: 3px solid ${(props) => props.theme.black};
  display: grid;
  gap: 4px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  padding: 12px;

  @media ${(props) => props.theme.deviceSizes.from.lg} {
    margin: 0;
    width: 34%;
  }
`;

/**
 * The number pad of the safe. Special thought has been put into the use of aria-label
 * to ensure that the buttons remain accessible to screen readers.
 */
const NumPad = () => {
  const dispatch = useDispatch();

  const handleNumberClick = (value: number) => {
    dispatch(pressNumber(value.toString()));
  };

  const handleClrClick = () => {
    dispatch(clear());
  };

  const handleEnterClick = () => {
    dispatch(enter());
  };

  return (
    <Wrapper>
      {Array.from({ length: NUMERIC_BUTTON_NUM }).map((_, index) => {
        const value = index + 1;

        return (
          <Button key={value} onClick={() => handleNumberClick(value)}>
            {value}
          </Button>
        );
      })}
      <Button aria-label="Clear" onClick={handleClrClick}>
        CLR
      </Button>
      <Button onClick={() => handleNumberClick(0)}>0</Button>
      <Button aria-label="Enter" onClick={handleEnterClick}>
        ⇨
      </Button>
    </Wrapper>
  );
};

export default NumPad;
