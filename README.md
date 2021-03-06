# React Testing
## Important!
Use `screen` which is a new export out of React Testing Library

Use `userEvent` rather than `fireEvent`

Latest versions of RTL are using `waitFor` instead of `wait`

Use MSW to mock out HTTP requests

## [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)

`screen` DOM Testing Library exports a screen object that can be used for querying and debugging, using `screen.debug`

`getByText` can use both `strings` and `regex`

```js
expect(screen.getByText(/Search/)).toBeInTheDocument();
```

`getByRole` is used to retrieve elements. This will also show all the selectable roles if you don't provide a role

```js
screen.getByRole('');
expect(screen.getByRole('textbox')).toBeInTheDocument(); // checks for a textbox in the document
```
Other search types which are more element specifc:
```js
LabelText: getByLabelText: <label for="search" />
PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
AltText: getByAltText: <img alt="profile" />
DisplayValue: getByDisplayValue: <input value="JavaScript" />
```
* getByText
* getByRole
* getByLabelText
* getByPlaceholderText
* getByAltText
* getByDisplayValue


## Testing React Components with Jest and React Testing Library
### 11 - Assert That Something is NOT Rendered with React Testing Library
If you want to verify that an element is not being rendered, then you're going to use a query that is prefixed with 'query' rather than one that is prefixed with 'get'.
```js
// use queryByRole instead
expect(queryByRole('alert')).toBeNull()
```

### 12 - Test Accessibility of Rendered React Components with jest-axe
While it may be imposible to completely automate accessibility testing, you can get a lot of low hanging fruit using `jest-axe`.

`toHaveNoViolations` from jest-axe will provide better error messaging.

```js
import 'jest-axe/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

test('the form is accessible', () => {
  const {container} = render(<Form />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

<!-- Arrange, act, assert -->
<!-- Notes jest components describe, test -->
## Resources 
[Jest](https://jestjs.io/) is a delightful JavaScript Testing Framework with a focus on simplicity.

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro) builds on top of DOM Testing Library by adding APIs for working with React components.

## Blogs
[How to use React Testing Library Tutorial](https://www.robinwieruch.de/react-testing-library) by Robin Wieruch