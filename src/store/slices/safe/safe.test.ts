import reducer, { clear, enter, initialState, pressNumber } from ".";

describe("safe reducer", () => {
  describe("pressNumber action", () => {
    it("should add digit to PIN", () => {
      expect(reducer(initialState, pressNumber("1"))).toEqual({
        ...initialState,
        pin: "1",
      });
    });

    it("should not add digit when PIN has max digits", () => {
      const previousState = {
        ...initialState,
        pin: "1234",
      };

      expect(reducer(previousState, pressNumber("5"))).toEqual(previousState);
    });

    it("should clear error when entering new digit", () => {
      const previousState = {
        ...initialState,
        error: true,
      };

      expect(reducer(previousState, pressNumber("1"))).toEqual({
        ...initialState,
        pin: "1",
      });
    });
  });

  describe("clear action", () => {
    it("should reset PIN and error", () => {
      const previousState = {
        ...initialState,
        error: true,
        pin: "1234",
      };

      expect(reducer(previousState, clear())).toEqual(initialState);
    });
  });

  describe("enter action", () => {
    it("sets error if PIN is not valid", () => {
      const previousState = {
        ...initialState,
        pin: "12",
      };

      expect(reducer(previousState, enter())).toEqual({
        ...previousState,
        pin: "",
        error: true,
      });
    });

    it("unlocks the safe if correct PIN is entered", () => {
      const pin = "1234";
      const previousState = {
        ...initialState,
        locked: true,
        pin,
        storedPin: pin,
      };

      expect(reducer(previousState, enter())).toEqual({
        ...previousState,
        locked: false,
        pin: "",
        storedPin: null,
      });
    });

    it("sets error if entered PIN is not stored PIN", () => {
      const storedPin = "1234";
      const previousState = {
        ...initialState,
        locked: true,
        pin: "9999",
        storedPin,
      };

      expect(reducer(previousState, enter())).toEqual({
        ...previousState,
        error: true,
        pin: "",
      });
    });

    it("stores valid PIN and locks safe on enter", () => {
      const pin = "1234";
      const previousState = {
        ...initialState,
        pin,
      };

      expect(reducer(previousState, enter())).toEqual({
        ...previousState,
        locked: true,
        pin: "",
        storedPin: pin,
      });
    });
  });
});
