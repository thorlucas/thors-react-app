# Thor's React App Template

This is my minimal React application starter-kit consisting of the following stack:

- **React JS**
- **Typescript**
- **PostCSS** with **TailwindCSS**
- **Craco**

## Style Guide

### General

- **Prefer `yarn`** over `npm`.
- **Use tabs**, not spaces.
- **Quotation marks**:
  - Use double quotes for *text*, as in, human readable text.
    > ```typescript
    > const message = "Uh oh, something went wrong!";
    > const title = "The title of my page!";
  - Use single quotes `'foo'` for things that function as "keys".
    > ```typescript
    > const foo: Foo = { type: 'bar' };
    > myArray['data'];
    > <div className={ foo ? 'bar' : 'baz' }>
    > import Foo from 'foo';

### Imports

- **Always use aliases** when possibe.
  > ```typescript
  > import Example  from '@components/Example';
  > ```

- **Always use the most specific alias possible**.
  > ```typescript
  > import Button from '@UI/Button';
  > // NOT from '@components/UI/Button'
  > ```

### Typing

- **Always strictly type** when possible.
  This includes:
  Callback function parameters
  > ```typescript
  > .then((res: ResponseType) => {
  >     ...
  > })
  Component definitions:
  > ```typescript
  > const Example: React.FC<ExampleProps> = ({ ... }) => { ... };
  Callback types:
  > ```typescript
  > type MyCallback = (value: string): void;
  > function myFunction(cb: MyCallback) { ... }

- **Void return signatures** do not need to be typed.
  
- **Define and export types where they naturally belong.**
  This may be in a component, or an API wrapper, or anything else. Avoid having a `custom-types.d.ts` or any related documents.

### Components

- **Use only functional components** where possible.
  An example component should look like this:
  > ```typescript-react
  > // src/components/Example/index.tsx
  > import React from "react";
  > 
  > interface TestProps {
  > 	foo: string,
  > 	bar?: number,
  > }
  > 
  > export const Test: React.FC<TestProps> = ({
  > 	foo,
  > 	bar = 42,
  > }) => {
  > 	return (
  > 	<>
  > 		<h1>{ foo }</h1>
  > 		<span>{ bar }</span>
  > 	</>
  > 	);
  > };
  > 
  > export default Test;
  > ```

- **Properly type component props.**

### Component Folder Structure

- Components should reside within their own folders.
  > A `Test` component should reside in `src/components/Test/`.

- The component's `index.tsx` should `export default` the namesake component.
  > The file `src/components/Test/index.tsx` should `export default Test;`.

- A component's `index.tsx` may also choose to export related components or types.
- A component's folder may include supporting assets such as `test.css`.
  Avoid assets such as icons, unless they are truly component-specific.
- A component's custom hooks should exist in a `hooks.ts` file in the component folder.
- Components should not define any API-type code.
