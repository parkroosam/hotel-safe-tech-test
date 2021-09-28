import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import wrappedRender from "../../test/wrappedRender";
import { ERRORED_SPEECH_TEXT, LOCKED_SPEECH_TEXT, UNLOCKED_SPEECH_TEXT } from "./AccessibilityHelper";
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
  it("displays inputted PIN and shows unlocked message to screen readers by default", () => {
    wrappedRender(<Safe />);

    expect(screen.getByRole("alert").textContent).toBe(UNLOCKED_SPEECH_TEXT);

    const pressedButtons = "123";
    inputSafePin(pressedButtons);

    expect(screen.getByText(pressedButtons)).toBeInTheDocument();
  });

  it("shows error message when entering invalid PIN", () => {
    wrappedRender(<Safe />);

    const pressedButtons = "12";
    inputSafePin(pressedButtons, true);

    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
    expect(screen.getByRole("alert").textContent).toBe(ERRORED_SPEECH_TEXT);
  });

  it("locks the safe when valid PIN is entered and shows locked message to screen readers", () => {
    wrappedRender(<Safe />);

    const pressedButtons = "1234";
    inputSafePin(pressedButtons, true);

    expect(screen.getByTestId("indicator-light").dataset.locked).toBe("true");
    expect(screen.getByRole("alert").textContent).toBe(LOCKED_SPEECH_TEXT);
  });

  it("shows invalid when wrong PIN is entered for locked safe", () => {
    wrappedRender(<Safe />);

    const pressedButtons = "1234";
    inputSafePin(pressedButtons, true);

    const wrongPin = "9999";
    inputSafePin(wrongPin, true);

    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });

  it("unlocks safe with correct PIN", () => {
    wrappedRender(<Safe />);

    const correctPin = "1234";
    inputSafePin(correctPin, true);

    inputSafePin(correctPin, true);

    expect(screen.getByTestId("indicator-light").dataset.locked).toBe("false");
    expect(screen.getByRole("alert").textContent).toBe(UNLOCKED_SPEECH_TEXT);
  });

  it("clears input PIN display when CLR is pressed", () => {
    wrappedRender(<Safe />);

    const pressedButtons = "123";
    inputSafePin(pressedButtons);

    userEvent.click(screen.getByRole("button", { name: "Clear" }));

    expect(screen.queryByText(pressedButtons)).not.toBeInTheDocument();
  });

  it("clears error message with CLR is pressed and reverts to unlocked message for screen readers", () => {
    wrappedRender(<Safe />);

    const pressedButtons = "123";
    inputSafePin(pressedButtons, true);

    expect(screen.getByRole("alert").textContent).toBe(ERRORED_SPEECH_TEXT);

    userEvent.click(screen.getByRole("button", { name: "Clear" }));

    expect(screen.getByRole("alert").textContent).toBe(UNLOCKED_SPEECH_TEXT);

    expect(screen.queryByText(pressedButtons)).not.toBeInTheDocument();
  });
});
