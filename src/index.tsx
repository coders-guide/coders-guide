import * as React from "react";
import * as ReactDOM from "react-dom";
import FontFaceObserver from "fontfaceobserver";

import { mobileAndTabletCheck } from "./utils";

import "./utils/polyfills";
import "./index.scss";

const font = new FontFaceObserver("Lato");

const render = (Component: React.ComponentType) => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

Promise.all([font.load("10pt Lato")]).then(() => {
  window.requestAnimationFrame(async () => {
    if (!mobileAndTabletCheck()) {
      const { DesktopApp } = await import("./App");
      document.documentElement.className = document.body.className = "desktop";
      render(DesktopApp);
    } else {
      const { MobileApp } = await import("./components/mobile");

      document.documentElement.className = document.body.className = "mobile";
      render(MobileApp);
    }
  });
});
