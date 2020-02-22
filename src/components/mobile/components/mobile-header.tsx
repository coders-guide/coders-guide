import * as React from "react";
import logoImage from "../../../assets/logo_updated.svg";

export const MobileHeader: React.FC<{
  count: [number, number];
  onMenuClick: () => void;
}> = ({ count: [currentIndex, nodesLength], onMenuClick }) => {
  const percentageDone = (currentIndex + 1) / nodesLength;
  return (
    <>
      <div className="m-header">
        <div className="m-header__menu-icon" onClick={onMenuClick}>
          <span />
          <span />
          <span />
        </div>

        <div className="m-header__product-logo">
          <img src={logoImage} />
        </div>
        <div className="m-header__counter">
          {currentIndex > 0 && (
            <>
              {currentIndex} / {nodesLength}
            </>
          )}
        </div>
      </div>
      <div className="m-sub-header">
        <span className="m-sub-header__highlight">Roadmap:</span> Web
        development with React - from zero to hero!
        <div
          className="m-sub-header__progress"
          style={{
            width: `${percentageDone * 100}%`
          }}
        />
      </div>
    </>
  );
};
