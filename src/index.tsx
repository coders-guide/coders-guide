import * as React from "react";
import * as ReactDOM from "react-dom";
import FontFaceObserver from "fontfaceobserver";
import demoImage1 from "./assets/tutorial1.jpg";
import demoImage2 from "./assets/tutorial2.jpg";

import "./utils/polyfills";

import { App } from "./App";

const loadImage = (url: string) =>
  new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", e => resolve(img));
    img.addEventListener("error", () => {
      reject(new Error(`Failed to load image's URL: ${url}`));
    });
    img.src = url;
  });

import "./index.scss";
import { mobileAndTabletCheck } from "./utils";

const font = new FontFaceObserver("Lato");

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

if (!mobileAndTabletCheck()) {
  Promise.all([
    loadImage(demoImage1),
    loadImage(demoImage2),
    font.load("10pt Lato")
  ]).then(() => {
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
