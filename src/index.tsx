import * as React from "react";
import * as ReactDOM from "react-dom";
import FontFaceObserver from "fontfaceobserver";
import { App } from "./App";
import { mobileAndTabletCheck } from "./utils";

import "./utils/polyfills";
import "./index.scss";

const font = new FontFaceObserver("Lato");

const xyz = () => {
  return 1 + 6
};

const aa = xyz();

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

if (!mobileAndTabletCheck()) {
  Promise.all([font.load("10pt Lato")]).then(() => {
    window.requestAnimationFrame(() => {
      render();
    });
  });
} else {
  const mobileWarningElement = document.getElementById("mobile-warning");
  if (mobileWarningElement) {
    mobileWarningElement.classList.add("is-forced");
  }
}
