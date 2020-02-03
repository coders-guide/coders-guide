import * as React from "react";
import * as ReactDOM from "react-dom";
import FontFaceObserver from "fontfaceobserver";
import { DesktopApp } from "./App";
import { MobileApp } from "./components/mobile";
import { mobileAndTabletCheck } from "./utils";

import "./utils/polyfills";
import "./index.scss";

const font = new FontFaceObserver("Lato");

const render = (Component: React.ComponentType) => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

Promise.all([font.load("10pt Lato")]).then(() => {
  window.requestAnimationFrame(() => {
    if (!mobileAndTabletCheck()) {
      document.documentElement.className = "desktop";
      document.body.className = "desktop";
      render(DesktopApp);
    } else {
      document.documentElement.className = "mobile";
      document.body.className = "mobile";
      render(MobileApp);
    }
  });
});
