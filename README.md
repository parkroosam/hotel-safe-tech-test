# Hotel Safe Technical Test

This is my submission for the Hotel Safe Technical Test. I hope you enjoy reviewing this as much as I enjoyed building it!

## Setup

To run the app, please follow the below commands:

```
# install dependencies
yarn

# start CRA development server
yarn start
```

This will start the app at http://localhost:3000/.

## Testing

As an example of how I would approach testing for a project like this, I have included a unit test for the safe reducer with Jest and a component test for the Safe component with React Testing Library.

To run these tests, please use `yarn test` after installing dependencies (see above under **Setup**).

## Assumptions

1. Styled Components is used as the styling solution. It has reasonably widespread usage within the industry, works well in a variety of situations, and I am personally familiar with this technology; for these reasons, I chose to use it.
2. Self-described as "the standard way to write Redux logic", Redux Toolkit is used for state management as it is the official recommended approach for composing Redux logic. It allows reducers to be written in a mutable way, yet still produce the same output through its underlying use of [Immer](https://www.npmjs.com/package/immer), an object immutability helper.
3. Tests are written with Jest and React Testing Library. React Testing Library is used over Enzyme because it is bundled in the base installation of Create React App, making it very convenient to start using. Additionally, it has steadily eclipsed Enyzme as the go-to for React component testing, as explained by the Thoughtworks Technology Radar evaluations for [React Testing Library](https://www.thoughtworks.com/radar/languages-and-frameworks/react-testing-library) and [Enzyme](https://www.thoughtworks.com/radar/languages-and-frameworks/enzyme).
4. I have taken an **adaptive** approach to responsive design of the safe. As you resize the safe down to a smaller size, you will notice that its layout changes to place the buttons below the display, making it suitable for use on mobile devices.
5. I have put special care into designing this project to cater for screen reader accessibility. This has been done in the form of accessible button labelling, tests that assert accessible messaging is valid, and `role="alert"` messages displayed as the state of the safe changes. Please find attached a [video recording](Screen%20Reader%20Demo.mp4) demonstrating this in action.
6. If given more time for this project, I would have liked to implement some visual regression tests using Cypress. I believe the current testing surrounding the visual status of the indicator light is inadequate; an additional test that "snapshots" the design would allow us to verify that it is indeed showing as expected.
