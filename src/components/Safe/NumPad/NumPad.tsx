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
  background-color: #666666;
  border: 3px solid #000000;
  display: grid;
  gap: 4px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 12px;
  width: 34%;
`;

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
      <Button onClick={handleClrClick}>CLR</Button>
      <Button onClick={() => handleNumberClick(0)}>0</Button>
      <Button onClick={handleEnterClick}>⇨</Button>
    </Wrapper>
  );
};

export default NumPad;
