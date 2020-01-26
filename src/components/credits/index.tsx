import * as React from "react";

export const Credits: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => (
  <div className="help-pane">
    <button className="help-pane__close" onClick={onClose}>
      X
    </button>
    <h2>Credits</h2>
    <ul className="help-pane__list">
      <li>
        Created by{" "}
        <a href="http://www.hubertzub.com/" target="_blank">
          Hubert Zub
        </a>{" "}
        in{" "}
        <a
          href="https://www.google.com/maps/place/Bialystok/data=!4m2!3m1!1s0x471ffc048f41971d:0x72317dcc8bf07b2c?sa=X&ved=2ahUKEwj4k9rt4KHnAhWFblAKHTUXBlIQ8gEwAHoECAsQAQ"
          target="_blank"
        >
          Białystok, Poland
        </a>
      </li>
      <li>
        Using code from{" "}
        <a href="https://github.com/graphql-editor/diagram" target="_blank">
          Diagram
        </a>{" "}
        by{" "}
        <a href="https://graphqleditor.com" target="_blank">
          GraphQL editor
        </a>
      </li>
      <li>
        Using free icons from{" "}
        <a href="http://www.onlinewebfonts.com/icon" target="_blank">
          OnlineWebFonts
        </a>
        ,{" "}
        <a href="https://iconmonstr.com/" target="_blank">
          IconMonstr
        </a>{" "}
        and{" "}
        <a
          href="https://www.flaticon.com/authors/freepik"
          title="Flaticon"
          target="_blank"
        >
          Freepik on Flaticon
        </a>
      </li>
      <li>
        Heavily inspired by education effort in{" "}
        <a href="http://www.eyedea.io" target="_blank">
          EYEDEA
        </a>{" "}
        ❤️
      </li>
    </ul>
  </div>
);
