import React from 'react';
import * as ReactDOM from "react-dom/client";
import { register } from "react-to-html-element";
import CodeGroup from "./CodeGroup";

register(CodeGroup, 'code-group', React, ReactDOM);
