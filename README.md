# render-props

Create a React render-props component, useful for nesting hooks or separating concerns.

## Install

```bash
npm install pierrot-le-foo/render-props
```

## Usage

```jsx
import RenderProps from "render-props";
import React from "react";

function App() {
  return <RenderProps>{() => <div>Hello</div>}</RenderProps>;
}
```
