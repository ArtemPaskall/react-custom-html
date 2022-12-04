import React from 'react';
import * as ReactDOM from "react-dom/client";
import { register } from "react-to-html-element";
import CodeGroup from "./CodeGroup";

register(CodeGroup, 'code-group', React, ReactDOM);

function App() {
  return (
      <code-group>
        <code-group-item title="NPM" active>

        ```bash
        npm install -D typescript
        npx tsc --init
        npm install grammy

        </code-group-item>
        <code-group-item title="Yarn">

        bash
        yarn add typescript -D
        npx tsc --init
        yarn add grammy

        </code-group-item>
        <code-group-item title="pnpm">

        bash
        pnpm add -D typescript
        npx tsc --init
        pnpm add grammy

        </code-group-item>
      </code-group>
  );
}

export default App;
