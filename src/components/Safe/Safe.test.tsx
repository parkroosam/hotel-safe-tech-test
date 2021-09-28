import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderWithRedux from "../../test/renderWithRedux";
import { ERROR_MESSAGE } from "./Display";
import Safe from "./Safe";

const inputSafePin = (pressedButtons: string, enter?: boolean) => {
  pressedButtons.split("").forEach((buttonValue) => {
    const buttonToPress = screen.getByRole("button", { name: buttonValue });

    userEvent.click(buttonToPress);
  });

  if (enter) userEvent.click(screen.getByRole("button", { name: "Enter" }));
};

describe("Safe component", () => {
  it("displays inputted PIN", () => {
    renderWithRedux(<Safe />);

    const pressedButtons = "123";
    inputSafePin(pressedButtons);

    expect(screen.getByText(pressedButtons)).toBeInTheDocument();
  });

  it("shows error message when entering invalid PIN", () => {
    renderWithRedux(<Safe />);

    const pressedButtons = "12";
    inputSafePin(pressedButtons, true);

    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });

  it("locks the safe when valid PIN is entered", () => {
    renderWithRedux(<Safe />);

    const pressedButtons = "1234";
    inputSafePin(pressedButtons, true);

    expect(screen.getByRole("switch", { checked: true })).toBeInTheDocument();
  });

  it("shows invalid when wrong PIN is entered for locked safe", () => {
    renderWithRedux(<Safe />);

    const pressedButtons = "1234";
    inputSafePin(pressedButtons, true);

    const wrongPin = "9999";
    inputSafePin(wrongPin, true);

    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });

  it("unlocks safe with correct PIN", () => {
    renderWithRedux(<Safe />);

    const correctPin = "1234";
    inputSafePin(correctPin, true);

    inputSafePin(correctPin, true);

    expect(screen.getByRole("switch", { checked: false })).toBeInTheDocument();
  });

  it("clears input PIN display when CLR is pressed", () => {
    renderWithRedux(<Safe />);

    const pressedButtons = "123";
    inputSafePin(pressedButtons);

    userEvent.click(screen.getByRole("button", { name: "Clear" }));

    expect(screen.queryByText(pressedButtons)).not.toBeInTheDocument();
  });

  it("clears error message with CLR is pressed", () => {
    renderWithRedux(<Safe />);

    const pressedButtons = "123";
    inputSafePin(pressedButtons, true);

    userEvent.click(screen.getByRole("button", { name: "Clear" }));

    expect(screen.queryByText(pressedButtons)).not.toBeInTheDocument();
  });
});
