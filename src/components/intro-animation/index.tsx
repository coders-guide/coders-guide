import * as React from "react";

import "./index.scss";

export const IntroAnimation: React.FC = () => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    if (step > 7) {
      return;
    }
    setTimeout(() => {
      setStep(step + 1);
    }, 450);
  }, [step]);

  const activate = (stepNumber: number) => {
    return step >= stepNumber ? "is-active" : "";
  };

  return (
    <svg
      id="Grupa_1_kopia"
      data-name="Grupa 1 kopia"
      width="854"
      height="721"
      viewBox="0 0 854 721"
    >
      <defs>
        <style>{``}</style>
        <image
          id="image"
          width="54"
          height="41"
          xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAApCAYAAAB+xdqTAAABu0lEQVRogd3ZPUvDQBjA8ScWxJdBBAUHEQRXXcW1i5vg7JfwS7i7iR+gg6uDL0sHJzvr5CboYhEURFCQv5wkUNIkTS5Pcnf+997l17SX61VCClgFzoAX4BE4AqaDQqQDNoAnxrsA5vy62pIVoJL6weFKoMLDVUCFg7NAjeJmOx4YxgI2ReRGRFYsXr4uIrNRw9dYuRjVF5GlGsM8Tzm6/syUUKaONzBFlOlSYYz6GRQwtFgosroDFv8jatmMm7t4AGsisi8i5rnQj6Jo0ARK8eN3LyLdKIqGRRPuAZ+pd+MYUFtFgW3gXelODYCFSRMa1HfOACcaOBeoA+BnwkC1cL6iauF8R1nhXKB2LVCVcK2j4klva05kcLmbaWBHEWV27vMTUfHEbwoT9rJwQDfjsWFbtd9aCncsE+cUJfW/Y+n+cM5RIzibVTGvay9QDeE00ju/8Ah3DsyooEZwRXvFtlDNnO46xDWHcohrHuUA1x6qRVz7qBTuqwFUz/nfQMq7CfL2l05SxPmDSlLA+YdKqoHzF5VkgfMflRTjPkqgToNBJZU4z1A5i3RSAS5cVBKwBVwBr8ADcOgMJSK/frB5DKZo4BMAAAAASUVORK5CYII="
        />
      </defs>
      <g className={`intro-animation__node ${activate(1)}`}>
        <rect
          id="Prostokąt_zaokrąglony_1"
          data-name="Prostokąt zaokrąglony 1"
          className="intro-animation__cls-1"
          x="28"
          y="30"
          width="408"
          height="96"
          rx="10"
          ry="10"
        />
        <path
          id="subject_1"
          data-name="subject #1"
          className="intro-animation__text intro-animation__cls-2"
          d="M86.646,64.724a9.821,9.821,0,0,0-1.77-1.29,13.249,13.249,0,0,0-2.13-.98,13.742,13.742,0,0,0-2.41-.62,15.979,15.979,0,0,0-2.61-.21,11.6,11.6,0,0,0-4.26.73,9.544,9.544,0,0,0-3.14,1.95,8.261,8.261,0,0,0-1.94,2.78,8.139,8.139,0,0,0-.66,3.2,9.21,9.21,0,0,0,.56,3.43,7.009,7.009,0,0,0,1.47,2.32,7.509,7.509,0,0,0,2.07,1.5,17.4,17.4,0,0,0,2.38.96q1.22,0.39,2.38.71a13.58,13.58,0,0,1,2.07.74A4.33,4.33,0,0,1,80.126,81a2.431,2.431,0,0,1,.56,1.66,3.084,3.084,0,0,1-1.02,2.57,4.493,4.493,0,0,1-2.86.81,6.632,6.632,0,0,1-2.36-.38,11.17,11.17,0,0,1-1.77-.84q-0.77-.46-1.38-0.84a2.279,2.279,0,0,0-1.21-.38,1.757,1.757,0,0,0-.86.22,1.627,1.627,0,0,0-.62.58l-2,3.16a10.515,10.515,0,0,0,2.02,1.56,15.8,15.8,0,0,0,2.48,1.21,16.434,16.434,0,0,0,2.73.79,14.2,14.2,0,0,0,2.77.28,12.272,12.272,0,0,0,4.43-.75,9.422,9.422,0,0,0,3.28-2.06,8.851,8.851,0,0,0,2.03-3.07,10.133,10.133,0,0,0,.7-3.78,7.792,7.792,0,0,0-.56-3.11,6.91,6.91,0,0,0-1.47-2.19,7.98,7.98,0,0,0-2.08-1.48,21.467,21.467,0,0,0-2.39-1.01q-1.22-.43-2.39-0.78a15.721,15.721,0,0,1-2.08-.77,4.818,4.818,0,0,1-1.47-1,2.016,2.016,0,0,1-.56-1.46,2.756,2.756,0,0,1,.93-2.19,4.217,4.217,0,0,1,2.83-.81,6.129,6.129,0,0,1,1.96.29,9.995,9.995,0,0,1,1.53.65q0.67,0.36,1.2.65a2.076,2.076,0,0,0,.99.29,1.41,1.41,0,0,0,.85-0.24,2.539,2.539,0,0,0,.63-0.72ZM100.1,85.294a4.86,4.86,0,0,1-1.81-1.3,5.8,5.8,0,0,1-1.13-2.06,8.95,8.95,0,0,1-.39-2.75V61.944h-6.76V79.2a13.616,13.616,0,0,0,.86,4.92,10.916,10.916,0,0,0,2.48,3.86,11.234,11.234,0,0,0,3.94,2.52,15.645,15.645,0,0,0,10.46,0,11.233,11.233,0,0,0,3.94-2.52,11.035,11.035,0,0,0,2.49-3.86,13.478,13.478,0,0,0,.87-4.92V61.944h-6.76V79.2a8.95,8.95,0,0,1-.39,2.75,5.69,5.69,0,0,1-1.13,2.05,4.907,4.907,0,0,1-1.81,1.29A6.786,6.786,0,0,1,100.1,85.294Zm30.99,5.79a14.913,14.913,0,0,0,4.66-.67,10,10,0,0,0,3.43-1.86,7.927,7.927,0,0,0,2.11-2.79,8.333,8.333,0,0,0,.72-3.46,5.88,5.88,0,0,0-1.38-4.03,8.027,8.027,0,0,0-4.26-2.27,9.928,9.928,0,0,0,2.26-1.13,6.576,6.576,0,0,0,1.54-1.45,5.565,5.565,0,0,0,.88-1.71,6.41,6.41,0,0,0,.28-1.89,8.393,8.393,0,0,0-.61-3.26,6,6,0,0,0-1.95-2.48,9.8,9.8,0,0,0-3.46-1.58,20.4,20.4,0,0,0-5.14-.56h-10.72v29.14h11.64Zm-0.16-12.36a7.869,7.869,0,0,1,2.12.24,3.521,3.521,0,0,1,1.35.68,2.383,2.383,0,0,1,.72,1.08,4.608,4.608,0,0,1,.21,1.44,5.368,5.368,0,0,1-.18,1.38,2.951,2.951,0,0,1-.66,1.22,3.465,3.465,0,0,1-1.33.88,5.966,5.966,0,0,1-2.19.34h-4.76v-7.26h4.72ZM126.205,67h3.96a9.411,9.411,0,0,1,1.97.18,3.361,3.361,0,0,1,1.37.6,2.483,2.483,0,0,1,.8,1.11,4.96,4.96,0,0,1,.26,1.73,4.124,4.124,0,0,1-.33,1.76,2.568,2.568,0,0,1-.96,1.1,4.193,4.193,0,0,1-1.53.56,11.582,11.582,0,0,1-2.02.16h-3.52V67Zm31.879-5.06h-6.76v18.72a11.21,11.21,0,0,1-.24,2.52,4.335,4.335,0,0,1-.72,1.65,2.649,2.649,0,0,1-1.21.9,4.918,4.918,0,0,1-1.71.27,5.66,5.66,0,0,1-1.2-.11,4.044,4.044,0,0,0-.84-0.11,1.526,1.526,0,0,0-1.03.32,1.189,1.189,0,0,0-.41.84l-0.36,3.94a19.271,19.271,0,0,0,2.31.4,20.92,20.92,0,0,0,2.25.12,11.149,11.149,0,0,0,4.38-.79,8.262,8.262,0,0,0,3.09-2.22,9.368,9.368,0,0,0,1.84-3.43,15.166,15.166,0,0,0,.61-4.44V61.944Zm4.8,0v29.14h18.76v-5.2h-11.96v-6.94h9.16v-5h-9.16v-6.8h11.96v-5.2h-18.76Zm41.6,21.73a2.374,2.374,0,0,0-.52.33,8.261,8.261,0,0,1-1.19.87,6.5,6.5,0,0,1-1.24.57,6.908,6.908,0,0,1-1.41.31,14.368,14.368,0,0,1-1.68.09,7.32,7.32,0,0,1-3-.62,7.042,7.042,0,0,1-2.45-1.81,8.743,8.743,0,0,1-1.66-2.93,11.99,11.99,0,0,1-.61-3.98,11.487,11.487,0,0,1,.61-3.86,8.629,8.629,0,0,1,1.7-2.93,7.377,7.377,0,0,1,2.61-1.86A8.461,8.461,0,0,1,199,67.2a9.429,9.429,0,0,1,1.85.16,8.457,8.457,0,0,1,1.38.39,6.1,6.1,0,0,1,1.02.5q0.43,0.27.79,0.5a7.483,7.483,0,0,0,.68.39,1.5,1.5,0,0,0,.68.16,1.352,1.352,0,0,0,.84-0.23,2.9,2.9,0,0,0,.52-0.51l2.28-3.06a11.2,11.2,0,0,0-1.88-1.57,12.775,12.775,0,0,0-2.32-1.22,15.108,15.108,0,0,0-2.71-.8,15.764,15.764,0,0,0-3.09-.29,16.771,16.771,0,0,0-6.18,1.1,14.117,14.117,0,0,0-4.81,3.08,13.976,13.976,0,0,0-3.13,4.71,15.628,15.628,0,0,0-1.12,5.99,17.436,17.436,0,0,0,.98,5.93,13.733,13.733,0,0,0,2.81,4.72,12.874,12.874,0,0,0,4.46,3.12A14.934,14.934,0,0,0,198,91.4a15.434,15.434,0,0,0,6.27-1.17,11.12,11.12,0,0,0,4.41-3.47L206,83.944a1.31,1.31,0,0,0-.46-0.31A1.343,1.343,0,0,0,204.483,83.674Zm5.28-21.73V67.3h8.2v23.78h6.76V67.3h8.2v-5.36h-23.16Zm52.479,21.24,0.32-1.92q0.04-.22.06-0.42c0.013-.133.02-0.26,0.02-0.38a1.6,1.6,0,0,0-.42-1.25,1.727,1.727,0,0,0-1.18-.37h-2.18l0.84-4.72h1.26a3.4,3.4,0,0,0,1.93-.43,2.06,2.06,0,0,0,.79-1.37l0.48-2.52h-3.88l1.04-5.82a0.914,0.914,0,0,0,.02-0.17v-0.15a1.569,1.569,0,0,0-.55-1.24,2.1,2.1,0,0,0-1.43-.48H256.6l-1.4,7.86h-3.32l1.4-7.86h-2.84a2.846,2.846,0,0,0-1.7.53,2.187,2.187,0,0,0-.9,1.47L246.8,69.8h-1.36a3.343,3.343,0,0,0-1.93.44,2.087,2.087,0,0,0-.79,1.36l-0.48,2.52h3.98l-0.84,4.72h-3.54l-0.32,1.92q-0.04.22-.06,0.42c-0.013.133-.02,0.26-0.02,0.38a1.6,1.6,0,0,0,.42,1.25,1.725,1.725,0,0,0,1.18.37h1.76l-1.4,7.9h2.76a3.594,3.594,0,0,0,.93-0.12,2.676,2.676,0,0,0,.83-0.38,2.273,2.273,0,0,0,.64-0.67,2.69,2.69,0,0,0,.36-0.99l0.98-5.74h3.3l-0.96,5.44a2.128,2.128,0,0,0-.03.22c-0.007.08-.01,0.154-0.01,0.22a2.22,2.22,0,0,0,.14.79,2.028,2.028,0,0,0,.38.64,1.81,1.81,0,0,0,.57.43,1.6,1.6,0,0,0,.71.16h2.88l1.4-7.9h3.96Zm-10.94-9.06h3.32l-0.84,4.72h-3.32Zm17.979,16.96h16.6V86.6h-4.8V61.924h-5.12l-9.08,7.62,1.96,2.6a1.973,1.973,0,0,0,.61.49,1.864,1.864,0,0,0,.93.23,1.9,1.9,0,0,0,.62-0.11,2.107,2.107,0,0,0,.64-0.37l3.3-2.74q-0.06,1.18-.06,2.26V86.6h-5.6v4.48Z"
        />
      </g>
      <use
        id="check-white"
        x="344"
        y="58"
        className={`intro-animation__check ${activate(1)}`}
        xlinkHref="#image"
        style={{ transformOrigin: `${344 + 27}px ${58 + 20}px` }} // 54 41
      />
      <g className={`intro-animation__node ${activate(2)}`}>
        <rect
          id="Prostokąt_zaokrąglony_1_kopia"
          data-name="Prostokąt zaokrąglony 1 kopia"
          className="intro-animation__cls-1"
          x="232"
          y="218"
          width="408"
          height="96"
          rx="10"
          ry="10"
        />
        <path
          id="subject_2"
          data-name="subject #2"
          className="intro-animation__text intro-animation__cls-2"
          d="M290.646,252.724a9.821,9.821,0,0,0-1.77-1.29,13.206,13.206,0,0,0-2.13-.98,13.742,13.742,0,0,0-2.41-.62,15.981,15.981,0,0,0-2.61-.21,11.59,11.59,0,0,0-4.26.73,9.547,9.547,0,0,0-3.14,1.95,8.262,8.262,0,0,0-1.94,2.78,8.14,8.14,0,0,0-.66,3.2,9.22,9.22,0,0,0,.56,3.43,7.005,7.005,0,0,0,1.47,2.32,7.521,7.521,0,0,0,2.07,1.5,17.412,17.412,0,0,0,2.38.96q1.219,0.39,2.38.71a13.534,13.534,0,0,1,2.07.74,4.315,4.315,0,0,1,1.47,1.06,2.431,2.431,0,0,1,.56,1.66,3.085,3.085,0,0,1-1.02,2.57,4.492,4.492,0,0,1-2.86.81,6.644,6.644,0,0,1-2.36-.38,11.144,11.144,0,0,1-1.77-.84q-0.769-.461-1.38-0.84a2.28,2.28,0,0,0-1.21-.38,1.753,1.753,0,0,0-.86.22,1.63,1.63,0,0,0-.62.58l-2,3.16a10.564,10.564,0,0,0,2.02,1.56,15.788,15.788,0,0,0,2.48,1.21,16.482,16.482,0,0,0,2.73.79,14.171,14.171,0,0,0,2.77.28,12.273,12.273,0,0,0,4.43-.75,9.43,9.43,0,0,0,3.28-2.06,8.85,8.85,0,0,0,2.03-3.07,10.125,10.125,0,0,0,.7-3.78,7.794,7.794,0,0,0-.56-3.11,6.9,6.9,0,0,0-1.47-2.19,7.984,7.984,0,0,0-2.08-1.48,21.4,21.4,0,0,0-2.39-1.01q-1.219-.431-2.39-0.78a15.728,15.728,0,0,1-2.08-.77,4.814,4.814,0,0,1-1.47-1,2.019,2.019,0,0,1-.56-1.46,2.756,2.756,0,0,1,.93-2.19,4.217,4.217,0,0,1,2.83-.81,6.131,6.131,0,0,1,1.96.29,9.954,9.954,0,0,1,1.53.65q0.671,0.36,1.2.65a2.081,2.081,0,0,0,.99.29,1.409,1.409,0,0,0,.85-0.24,2.539,2.539,0,0,0,.63-0.72Zm13.449,20.57a4.868,4.868,0,0,1-1.81-1.3,5.81,5.81,0,0,1-1.13-2.06,8.952,8.952,0,0,1-.39-2.75v-17.24h-6.76V267.2a13.624,13.624,0,0,0,.86,4.92,10.932,10.932,0,0,0,2.48,3.86,11.242,11.242,0,0,0,3.94,2.52,15.646,15.646,0,0,0,10.46,0,11.233,11.233,0,0,0,3.94-2.52,11.04,11.04,0,0,0,2.49-3.86,13.477,13.477,0,0,0,.87-4.92v-17.26h-6.76V267.2a8.952,8.952,0,0,1-.39,2.75,5.689,5.689,0,0,1-1.13,2.05,4.907,4.907,0,0,1-1.81,1.29A6.786,6.786,0,0,1,304.1,273.294Zm30.99,5.79a14.91,14.91,0,0,0,4.66-.67,10.019,10.019,0,0,0,3.43-1.86,7.925,7.925,0,0,0,2.11-2.79,8.334,8.334,0,0,0,.72-3.46,5.881,5.881,0,0,0-1.38-4.03,8.025,8.025,0,0,0-4.26-2.27,9.948,9.948,0,0,0,2.26-1.13,6.584,6.584,0,0,0,1.54-1.45,5.563,5.563,0,0,0,.88-1.71,6.415,6.415,0,0,0,.28-1.89,8.391,8.391,0,0,0-.61-3.26,6,6,0,0,0-1.95-2.48,9.794,9.794,0,0,0-3.46-1.58,20.4,20.4,0,0,0-5.14-.56h-10.72v29.14h11.64Zm-0.16-12.36a7.869,7.869,0,0,1,2.12.24,3.523,3.523,0,0,1,1.35.68,2.378,2.378,0,0,1,.72,1.08,4.609,4.609,0,0,1,.21,1.44,5.367,5.367,0,0,1-.18,1.38,2.954,2.954,0,0,1-.66,1.22,3.47,3.47,0,0,1-1.33.88,5.964,5.964,0,0,1-2.19.34h-4.76v-7.26h4.72ZM330.205,255h3.96a9.411,9.411,0,0,1,1.97.18,3.361,3.361,0,0,1,1.37.6,2.483,2.483,0,0,1,.8,1.11,4.96,4.96,0,0,1,.26,1.73,4.126,4.126,0,0,1-.33,1.76,2.571,2.571,0,0,1-.96,1.1,4.2,4.2,0,0,1-1.53.56,11.572,11.572,0,0,1-2.02.16h-3.52V255Zm31.879-5.06h-6.76v18.72a11.21,11.21,0,0,1-.24,2.52,4.335,4.335,0,0,1-.72,1.65,2.649,2.649,0,0,1-1.21.9,4.918,4.918,0,0,1-1.71.27,5.693,5.693,0,0,1-1.2-.11,4.05,4.05,0,0,0-.84-0.11,1.527,1.527,0,0,0-1.03.32,1.187,1.187,0,0,0-.41.84l-0.36,3.94a19.251,19.251,0,0,0,2.31.4,20.92,20.92,0,0,0,2.25.12,11.141,11.141,0,0,0,4.38-.79,8.273,8.273,0,0,0,3.09-2.22,9.371,9.371,0,0,0,1.84-3.43,15.165,15.165,0,0,0,.61-4.44v-18.58Zm4.8,0v29.14h18.76v-5.2h-11.96v-6.94h9.16v-5h-9.16v-6.8h11.96v-5.2h-18.76Zm41.6,21.73a2.382,2.382,0,0,0-.52.33,8.246,8.246,0,0,1-1.19.87,6.563,6.563,0,0,1-1.24.57,6.9,6.9,0,0,1-1.41.31,14.368,14.368,0,0,1-1.68.09,7.328,7.328,0,0,1-3-.62,7.047,7.047,0,0,1-2.45-1.81,8.742,8.742,0,0,1-1.66-2.93,11.992,11.992,0,0,1-.61-3.98,11.486,11.486,0,0,1,.61-3.86,8.626,8.626,0,0,1,1.7-2.93,7.364,7.364,0,0,1,2.61-1.86,8.463,8.463,0,0,1,3.36-.65,9.391,9.391,0,0,1,1.85.16,8.477,8.477,0,0,1,1.38.39,6.062,6.062,0,0,1,1.02.5q0.431,0.27.79,0.5a7.728,7.728,0,0,0,.68.39,1.5,1.5,0,0,0,.68.16,1.355,1.355,0,0,0,.84-0.23,2.892,2.892,0,0,0,.52-0.51l2.28-3.06a11.182,11.182,0,0,0-1.88-1.57,12.781,12.781,0,0,0-2.32-1.22,15.067,15.067,0,0,0-2.71-.8,15.772,15.772,0,0,0-3.09-.29,16.773,16.773,0,0,0-6.18,1.1,13.8,13.8,0,0,0-7.94,7.79,15.629,15.629,0,0,0-1.12,5.99,17.438,17.438,0,0,0,.98,5.93,13.738,13.738,0,0,0,2.81,4.72,12.871,12.871,0,0,0,4.46,3.12A14.942,14.942,0,0,0,402,279.4a15.434,15.434,0,0,0,6.27-1.17,11.124,11.124,0,0,0,4.41-3.47l-2.68-2.82a1.3,1.3,0,0,0-.46-0.31A1.343,1.343,0,0,0,408.483,271.674Zm5.28-21.73v5.36h8.2v23.78h6.76V255.3h8.2v-5.36h-23.16Zm52.479,21.24,0.32-1.92q0.04-.221.06-0.42c0.013-.133.02-0.26,0.02-0.38a1.6,1.6,0,0,0-.42-1.25,1.724,1.724,0,0,0-1.18-.37h-2.18l0.84-4.72h1.26a3.4,3.4,0,0,0,1.93-.43,2.061,2.061,0,0,0,.79-1.37l0.48-2.52h-3.88l1.04-5.82a0.918,0.918,0,0,0,.02-0.17v-0.15a1.568,1.568,0,0,0-.55-1.24,2.1,2.1,0,0,0-1.43-.48H460.6l-1.4,7.86h-3.32l1.4-7.86h-2.84a2.847,2.847,0,0,0-1.7.53,2.185,2.185,0,0,0-.9,1.47l-1.04,5.86h-1.36a3.344,3.344,0,0,0-1.93.44,2.086,2.086,0,0,0-.79,1.36l-0.48,2.52h3.98l-0.84,4.72h-3.54l-0.32,1.92q-0.041.221-.06,0.42c-0.013.133-.02,0.26-0.02,0.38a1.6,1.6,0,0,0,.42,1.25,1.724,1.724,0,0,0,1.18.37h1.76l-1.4,7.9h2.76a3.594,3.594,0,0,0,.93-0.12,2.687,2.687,0,0,0,.83-0.38,2.278,2.278,0,0,0,.64-0.67,2.689,2.689,0,0,0,.36-0.99l0.98-5.74h3.3l-0.96,5.44a2.132,2.132,0,0,0-.03.22c-0.007.08-.01,0.153-0.01,0.22a2.222,2.222,0,0,0,.14.79,2.027,2.027,0,0,0,.38.64,1.818,1.818,0,0,0,.57.43,1.6,1.6,0,0,0,.71.16h2.88l1.4-7.9h3.96Zm-10.94-9.06h3.32l-0.84,4.72h-3.32Zm21.239-11.97a8.958,8.958,0,0,0-5.35,4.31,10.93,10.93,0,0,0-1.23,3.8l3.28,0.58c0.16,0.027.317,0.047,0.47,0.06s0.3,0.02.43,0.02a2.041,2.041,0,0,0,1.33-.4,2.885,2.885,0,0,0,.81-1.3,4.218,4.218,0,0,1,.53-1,3.59,3.59,0,0,1,.79-0.8,3.827,3.827,0,0,1,1.04-.54,3.914,3.914,0,0,1,1.28-.2,3.22,3.22,0,0,1,2.53.93,3.883,3.883,0,0,1,.83,2.67,7.593,7.593,0,0,1-.26,2.01,8.761,8.761,0,0,1-.78,1.9,12.82,12.82,0,0,1-1.32,1.93,27.845,27.845,0,0,1-1.88,2.06l-8.4,8.46a2.991,2.991,0,0,0-.84,1.2,3.636,3.636,0,0,0-.24,1.24v2h20.48v-3.6a1.9,1.9,0,0,0-.58-1.45,2.2,2.2,0,0,0-1.58-.55h-5.44a11.488,11.488,0,0,0-2.01.19,20.94,20.94,0,0,0-2.17.51l5.7-5.84q1.159-1.18,2.19-2.33a18.088,18.088,0,0,0,1.81-2.38,11.653,11.653,0,0,0,1.23-2.59,9.372,9.372,0,0,0,.45-2.96,8.736,8.736,0,0,0-.65-3.41,7.541,7.541,0,0,0-1.87-2.67,8.7,8.7,0,0,0-2.95-1.75,11.309,11.309,0,0,0-3.89-.63A12.787,12.787,0,0,0,476.541,250.154Z"
        />
      </g>
      <use
        id="check-white_kopia"
        data-name="check-white kopia"
        x="548"
        y="244"
        xlinkHref="#image"
        className={`intro-animation__check ${activate(2)}`}
        style={{ transformOrigin: `${548 + 27}px ${244 + 20}px` }} // 54 41
      />
      <g className={`intro-animation__node ${activate(4)}`}>
        <rect
          id="Prostokąt_zaokrąglony_1_kopia_2"
          data-name="Prostokąt zaokrąglony 1 kopia 2"
          className="intro-animation__cls-1"
          x="28"
          y="406"
          width="408"
          height="96"
          rx="10"
          ry="10"
        />
        <path
          id="subject_3"
          data-name="subject #3"
          className="intro-animation__text intro-animation__cls-2"
          d="M86.646,440.724a9.821,9.821,0,0,0-1.77-1.29,13.206,13.206,0,0,0-2.13-.98,13.751,13.751,0,0,0-2.41-.62,15.979,15.979,0,0,0-2.61-.21,11.59,11.59,0,0,0-4.26.73,9.548,9.548,0,0,0-3.14,1.95,8.256,8.256,0,0,0-1.94,2.78,8.14,8.14,0,0,0-.66,3.2,9.212,9.212,0,0,0,.56,3.43,7.008,7.008,0,0,0,1.47,2.32,7.509,7.509,0,0,0,2.07,1.5,17.4,17.4,0,0,0,2.38.96q1.22,0.39,2.38.71a13.526,13.526,0,0,1,2.07.74,4.323,4.323,0,0,1,1.47,1.06,2.431,2.431,0,0,1,.56,1.66,3.085,3.085,0,0,1-1.02,2.57,4.493,4.493,0,0,1-2.86.81,6.643,6.643,0,0,1-2.36-.38,11.152,11.152,0,0,1-1.77-.84q-0.77-.461-1.38-0.84a2.28,2.28,0,0,0-1.21-.38,1.752,1.752,0,0,0-.86.22,1.628,1.628,0,0,0-.62.58l-2,3.16a10.555,10.555,0,0,0,2.02,1.56,15.792,15.792,0,0,0,2.48,1.21,16.482,16.482,0,0,0,2.73.79,14.172,14.172,0,0,0,2.77.28,12.272,12.272,0,0,0,4.43-.75,9.43,9.43,0,0,0,3.28-2.06,8.855,8.855,0,0,0,2.03-3.07,10.133,10.133,0,0,0,.7-3.78,7.792,7.792,0,0,0-.56-3.11,6.91,6.91,0,0,0-1.47-2.19,7.982,7.982,0,0,0-2.08-1.48,21.392,21.392,0,0,0-2.39-1.01q-1.22-.431-2.39-0.78a15.706,15.706,0,0,1-2.08-.77,4.816,4.816,0,0,1-1.47-1,2.017,2.017,0,0,1-.56-1.46,2.756,2.756,0,0,1,.93-2.19,4.217,4.217,0,0,1,2.83-.81,6.132,6.132,0,0,1,1.96.29,9.945,9.945,0,0,1,1.53.65q0.67,0.36,1.2.65a2.082,2.082,0,0,0,.99.29,1.41,1.41,0,0,0,.85-0.24,2.539,2.539,0,0,0,.63-0.72Zm13.449,20.57a4.859,4.859,0,0,1-1.81-1.3,5.8,5.8,0,0,1-1.13-2.06,8.952,8.952,0,0,1-.39-2.75v-17.24h-6.76V455.2a13.615,13.615,0,0,0,.86,4.92,10.92,10.92,0,0,0,2.48,3.86,11.234,11.234,0,0,0,3.94,2.52,15.645,15.645,0,0,0,10.46,0,11.233,11.233,0,0,0,3.94-2.52,11.04,11.04,0,0,0,2.49-3.86,13.477,13.477,0,0,0,.87-4.92v-17.26h-6.76V455.2a8.952,8.952,0,0,1-.39,2.75,5.689,5.689,0,0,1-1.13,2.05,4.907,4.907,0,0,1-1.81,1.29A6.786,6.786,0,0,1,100.1,461.294Zm30.99,5.79a14.91,14.91,0,0,0,4.66-.67,10.019,10.019,0,0,0,3.43-1.86,7.925,7.925,0,0,0,2.11-2.79,8.334,8.334,0,0,0,.72-3.46,5.881,5.881,0,0,0-1.38-4.03,8.025,8.025,0,0,0-4.26-2.27,9.948,9.948,0,0,0,2.26-1.13,6.584,6.584,0,0,0,1.54-1.45,5.563,5.563,0,0,0,.88-1.71,6.415,6.415,0,0,0,.28-1.89,8.391,8.391,0,0,0-.61-3.26,6,6,0,0,0-1.95-2.48,9.794,9.794,0,0,0-3.46-1.58,20.4,20.4,0,0,0-5.14-.56h-10.72v29.14h11.64Zm-0.16-12.36a7.869,7.869,0,0,1,2.12.24,3.523,3.523,0,0,1,1.35.68,2.378,2.378,0,0,1,.72,1.08,4.609,4.609,0,0,1,.21,1.44,5.367,5.367,0,0,1-.18,1.38,2.954,2.954,0,0,1-.66,1.22,3.47,3.47,0,0,1-1.33.88,5.964,5.964,0,0,1-2.19.34h-4.76v-7.26h4.72ZM126.205,443h3.96a9.411,9.411,0,0,1,1.97.18,3.361,3.361,0,0,1,1.37.6,2.483,2.483,0,0,1,.8,1.11,4.96,4.96,0,0,1,.26,1.73,4.126,4.126,0,0,1-.33,1.76,2.571,2.571,0,0,1-.96,1.1,4.2,4.2,0,0,1-1.53.56,11.572,11.572,0,0,1-2.02.16h-3.52V443Zm31.879-5.06h-6.76v18.72a11.21,11.21,0,0,1-.24,2.52,4.335,4.335,0,0,1-.72,1.65,2.649,2.649,0,0,1-1.21.9,4.918,4.918,0,0,1-1.71.27,5.693,5.693,0,0,1-1.2-.11,4.05,4.05,0,0,0-.84-0.11,1.527,1.527,0,0,0-1.03.32,1.187,1.187,0,0,0-.41.84l-0.36,3.94a19.251,19.251,0,0,0,2.31.4,20.92,20.92,0,0,0,2.25.12,11.141,11.141,0,0,0,4.38-.79,8.273,8.273,0,0,0,3.09-2.22,9.371,9.371,0,0,0,1.84-3.43,15.165,15.165,0,0,0,.61-4.44v-18.58Zm4.8,0v29.14h18.76v-5.2h-11.96v-6.94h9.16v-5h-9.16v-6.8h11.96v-5.2h-18.76Zm41.6,21.73a2.382,2.382,0,0,0-.52.33,8.246,8.246,0,0,1-1.19.87,6.563,6.563,0,0,1-1.24.57,6.9,6.9,0,0,1-1.41.31,14.368,14.368,0,0,1-1.68.09,7.328,7.328,0,0,1-3-.62,7.047,7.047,0,0,1-2.45-1.81,8.742,8.742,0,0,1-1.66-2.93,11.992,11.992,0,0,1-.61-3.98,11.486,11.486,0,0,1,.61-3.86,8.626,8.626,0,0,1,1.7-2.93,7.364,7.364,0,0,1,2.61-1.86,8.463,8.463,0,0,1,3.36-.65,9.391,9.391,0,0,1,1.85.16,8.477,8.477,0,0,1,1.38.39,6.062,6.062,0,0,1,1.02.5q0.43,0.27.79,0.5a7.728,7.728,0,0,0,.68.39,1.5,1.5,0,0,0,.68.16,1.355,1.355,0,0,0,.84-0.23,2.892,2.892,0,0,0,.52-0.51l2.28-3.06a11.182,11.182,0,0,0-1.88-1.57,12.781,12.781,0,0,0-2.32-1.22,15.067,15.067,0,0,0-2.71-.8,15.772,15.772,0,0,0-3.09-.29,16.773,16.773,0,0,0-6.18,1.1,13.8,13.8,0,0,0-7.94,7.79,15.629,15.629,0,0,0-1.12,5.99,17.438,17.438,0,0,0,.98,5.93,13.738,13.738,0,0,0,2.81,4.72,12.871,12.871,0,0,0,4.46,3.12A14.942,14.942,0,0,0,198,467.4a15.434,15.434,0,0,0,6.27-1.17,11.124,11.124,0,0,0,4.41-3.47l-2.68-2.82a1.3,1.3,0,0,0-.46-0.31A1.343,1.343,0,0,0,204.483,459.674Zm5.28-21.73v5.36h8.2v23.78h6.76V443.3h8.2v-5.36h-23.16Zm52.479,21.24,0.32-1.92q0.04-.221.06-0.42c0.013-.133.02-0.26,0.02-0.38a1.6,1.6,0,0,0-.42-1.25,1.724,1.724,0,0,0-1.18-.37h-2.18l0.84-4.72h1.26a3.4,3.4,0,0,0,1.93-.43,2.061,2.061,0,0,0,.79-1.37l0.48-2.52h-3.88l1.04-5.82a0.918,0.918,0,0,0,.02-0.17v-0.15a1.568,1.568,0,0,0-.55-1.24,2.1,2.1,0,0,0-1.43-.48H256.6l-1.4,7.86h-3.32l1.4-7.86h-2.84a2.847,2.847,0,0,0-1.7.53,2.185,2.185,0,0,0-.9,1.47l-1.04,5.86h-1.36a3.344,3.344,0,0,0-1.93.44,2.086,2.086,0,0,0-.79,1.36l-0.48,2.52h3.98l-0.84,4.72h-3.54l-0.32,1.92q-0.04.221-.06,0.42c-0.013.133-.02,0.26-0.02,0.38a1.6,1.6,0,0,0,.42,1.25,1.724,1.724,0,0,0,1.18.37h1.76l-1.4,7.9h2.76a3.594,3.594,0,0,0,.93-0.12,2.687,2.687,0,0,0,.83-0.38,2.278,2.278,0,0,0,.64-0.67,2.689,2.689,0,0,0,.36-0.99l0.98-5.74h3.3l-0.96,5.44a2.132,2.132,0,0,0-.03.22c-0.007.08-.01,0.153-0.01,0.22a2.222,2.222,0,0,0,.14.79,2.027,2.027,0,0,0,.38.64,1.818,1.818,0,0,0,.57.43,1.6,1.6,0,0,0,.71.16h2.88l1.4-7.9h3.96Zm-10.94-9.06h3.32l-0.84,4.72h-3.32Zm21.8-11.97a8.958,8.958,0,0,0-5.35,4.31,10.93,10.93,0,0,0-1.23,3.8l3.28,0.58c0.16,0.027.317,0.047,0.47,0.06s0.3,0.02.43,0.02a2.041,2.041,0,0,0,1.33-.4,2.885,2.885,0,0,0,.81-1.3,4.218,4.218,0,0,1,.53-1,3.59,3.59,0,0,1,.79-0.8,3.827,3.827,0,0,1,1.04-.54,3.914,3.914,0,0,1,1.28-.2,3.22,3.22,0,0,1,2.53.93,3.851,3.851,0,0,1,.83,2.65,5.607,5.607,0,0,1-.2,1.54,2.319,2.319,0,0,1-.81,1.19,4.5,4.5,0,0,1-1.73.77,12.5,12.5,0,0,1-2.94.28v4.28a15.229,15.229,0,0,1,3.37.29,4.121,4.121,0,0,1,1.81.83,2.209,2.209,0,0,1,.73,1.29,9.916,9.916,0,0,1,.13,1.69,4.059,4.059,0,0,1-.26,1.42,3.728,3.728,0,0,1-.77,1.25,3.938,3.938,0,0,1-1.28.9,4.346,4.346,0,0,1-1.81.35,3.864,3.864,0,0,1-2.37-.75,7.262,7.262,0,0,1-1.91-2.41,1.7,1.7,0,0,0-.77-0.73,2.573,2.573,0,0,0-1.15-.25,4.073,4.073,0,0,0-.69.06,2.983,2.983,0,0,0-.71.22l-2.76,1.12a16.338,16.338,0,0,0,1.65,3.52,9.257,9.257,0,0,0,2.21,2.43,8.526,8.526,0,0,0,2.88,1.4,13.852,13.852,0,0,0,3.7.45,13.166,13.166,0,0,0,3.88-.57,9.627,9.627,0,0,0,3.27-1.71,8.3,8.3,0,0,0,2.25-2.86,9.109,9.109,0,0,0,.84-4.04q0-4.9-4.84-6.58a8.094,8.094,0,0,0,1.85-.9,5.206,5.206,0,0,0,1.36-1.31,5.564,5.564,0,0,0,.83-1.82,9.46,9.46,0,0,0,.28-2.43,7.126,7.126,0,0,0-.6-2.89,6.968,6.968,0,0,0-1.76-2.41,8.6,8.6,0,0,0-2.84-1.65,11.2,11.2,0,0,0-3.84-.61A12.787,12.787,0,0,0,273.1,438.154Z"
        />
      </g>
      <use
        id="check-white_kopia_2"
        data-name="check-white kopia 2"
        x="344"
        y="433"
        xlinkHref="#image"
        className={`intro-animation__check ${activate(4)}`}
        style={{ transformOrigin: `${344 + 27}px ${433 + 20}px` }} // 54 41
      />
      <g className={`intro-animation__node ${activate(6)}`}>
        <rect
          id="Prostokąt_zaokrąglony_1_kopia_3"
          data-name="Prostokąt zaokrąglony 1 kopia 3"
          className="intro-animation__cls-1"
          x="425"
          y="594"
          width="408"
          height="96"
          rx="10"
          ry="10"
        />
        <path
          id="subject_4"
          data-name="subject #4"
          className="intro-animation__text intro-animation__cls-2"
          d="M483.646,628.724a9.821,9.821,0,0,0-1.77-1.29,13.206,13.206,0,0,0-2.13-.98,13.742,13.742,0,0,0-2.41-.62,15.981,15.981,0,0,0-2.61-.21,11.59,11.59,0,0,0-4.26.73,9.547,9.547,0,0,0-3.14,1.95,8.262,8.262,0,0,0-1.94,2.78,8.14,8.14,0,0,0-.66,3.2,9.22,9.22,0,0,0,.56,3.43,7.005,7.005,0,0,0,1.47,2.32,7.521,7.521,0,0,0,2.07,1.5,17.412,17.412,0,0,0,2.38.96q1.219,0.39,2.38.71a13.534,13.534,0,0,1,2.07.74,4.315,4.315,0,0,1,1.47,1.06,2.431,2.431,0,0,1,.56,1.66,3.085,3.085,0,0,1-1.02,2.57,4.492,4.492,0,0,1-2.86.81,6.644,6.644,0,0,1-2.36-.38,11.144,11.144,0,0,1-1.77-.84q-0.769-.46-1.38-0.84a2.28,2.28,0,0,0-1.21-.38,1.753,1.753,0,0,0-.86.22,1.63,1.63,0,0,0-.62.58l-2,3.16a10.564,10.564,0,0,0,2.02,1.56,15.788,15.788,0,0,0,2.48,1.21,16.482,16.482,0,0,0,2.73.79,14.171,14.171,0,0,0,2.77.28,12.273,12.273,0,0,0,4.43-.75,9.43,9.43,0,0,0,3.28-2.06,8.85,8.85,0,0,0,2.03-3.07,10.125,10.125,0,0,0,.7-3.78,7.794,7.794,0,0,0-.56-3.11,6.9,6.9,0,0,0-1.47-2.19,7.984,7.984,0,0,0-2.08-1.48,21.4,21.4,0,0,0-2.39-1.01q-1.219-.43-2.39-0.78a15.728,15.728,0,0,1-2.08-.77,4.814,4.814,0,0,1-1.47-1,2.019,2.019,0,0,1-.56-1.46,2.756,2.756,0,0,1,.93-2.19,4.217,4.217,0,0,1,2.83-.81,6.131,6.131,0,0,1,1.96.29,9.954,9.954,0,0,1,1.53.65q0.671,0.36,1.2.65a2.081,2.081,0,0,0,.99.29,1.409,1.409,0,0,0,.85-0.24,2.539,2.539,0,0,0,.63-0.72Zm13.449,20.57a4.868,4.868,0,0,1-1.81-1.3,5.81,5.81,0,0,1-1.13-2.06,8.952,8.952,0,0,1-.39-2.75v-17.24h-6.76V643.2a13.624,13.624,0,0,0,.86,4.92,10.932,10.932,0,0,0,2.48,3.86,11.242,11.242,0,0,0,3.94,2.52,15.646,15.646,0,0,0,10.46,0,11.233,11.233,0,0,0,3.94-2.52,11.04,11.04,0,0,0,2.49-3.86,13.477,13.477,0,0,0,.87-4.92v-17.26h-6.76V643.2a8.952,8.952,0,0,1-.39,2.75,5.689,5.689,0,0,1-1.13,2.05,4.907,4.907,0,0,1-1.81,1.29A6.786,6.786,0,0,1,497.1,649.294Zm30.99,5.79a14.91,14.91,0,0,0,4.66-.67,10.019,10.019,0,0,0,3.43-1.86,7.925,7.925,0,0,0,2.11-2.79,8.334,8.334,0,0,0,.72-3.46,5.881,5.881,0,0,0-1.38-4.03,8.025,8.025,0,0,0-4.26-2.27,9.948,9.948,0,0,0,2.26-1.13,6.584,6.584,0,0,0,1.54-1.45,5.563,5.563,0,0,0,.88-1.71,6.415,6.415,0,0,0,.28-1.89,8.391,8.391,0,0,0-.61-3.26,6,6,0,0,0-1.95-2.48,9.794,9.794,0,0,0-3.46-1.58,20.4,20.4,0,0,0-5.14-.56h-10.72v29.14h11.64Zm-0.16-12.36a7.869,7.869,0,0,1,2.12.24,3.523,3.523,0,0,1,1.35.68,2.378,2.378,0,0,1,.72,1.08,4.609,4.609,0,0,1,.21,1.44,5.367,5.367,0,0,1-.18,1.38,2.954,2.954,0,0,1-.66,1.22,3.47,3.47,0,0,1-1.33.88,5.964,5.964,0,0,1-2.19.34h-4.76v-7.26h4.72ZM523.205,631h3.96a9.411,9.411,0,0,1,1.97.18,3.361,3.361,0,0,1,1.37.6,2.483,2.483,0,0,1,.8,1.11,4.96,4.96,0,0,1,.26,1.73,4.126,4.126,0,0,1-.33,1.76,2.571,2.571,0,0,1-.96,1.1,4.2,4.2,0,0,1-1.53.56,11.572,11.572,0,0,1-2.02.16h-3.52V631Zm31.879-5.06h-6.76v18.72a11.21,11.21,0,0,1-.24,2.52,4.335,4.335,0,0,1-.72,1.65,2.649,2.649,0,0,1-1.21.9,4.918,4.918,0,0,1-1.71.27,5.693,5.693,0,0,1-1.2-.11,4.05,4.05,0,0,0-.84-0.11,1.527,1.527,0,0,0-1.03.32,1.187,1.187,0,0,0-.41.84l-0.36,3.94a19.251,19.251,0,0,0,2.31.4,20.92,20.92,0,0,0,2.25.12,11.141,11.141,0,0,0,4.38-.79,8.273,8.273,0,0,0,3.09-2.22,9.371,9.371,0,0,0,1.84-3.43,15.165,15.165,0,0,0,.61-4.44v-18.58Zm4.8,0v29.14h18.76v-5.2h-11.96v-6.94h9.16v-5h-9.16v-6.8h11.96v-5.2h-18.76Zm41.6,21.73a2.382,2.382,0,0,0-.52.33,8.246,8.246,0,0,1-1.19.87,6.563,6.563,0,0,1-1.24.57,6.9,6.9,0,0,1-1.41.31,14.368,14.368,0,0,1-1.68.09,7.328,7.328,0,0,1-3-.62,7.047,7.047,0,0,1-2.45-1.81,8.742,8.742,0,0,1-1.66-2.93,11.992,11.992,0,0,1-.61-3.98,11.486,11.486,0,0,1,.61-3.86,8.626,8.626,0,0,1,1.7-2.93,7.364,7.364,0,0,1,2.61-1.86,8.463,8.463,0,0,1,3.36-.65,9.391,9.391,0,0,1,1.85.16,8.477,8.477,0,0,1,1.38.39,6.062,6.062,0,0,1,1.02.5q0.43,0.27.79,0.5a7.728,7.728,0,0,0,.68.39,1.5,1.5,0,0,0,.68.16,1.355,1.355,0,0,0,.84-0.23,2.892,2.892,0,0,0,.52-0.51l2.28-3.06a11.182,11.182,0,0,0-1.88-1.57,12.781,12.781,0,0,0-2.32-1.22,15.067,15.067,0,0,0-2.71-.8,15.772,15.772,0,0,0-3.09-.29,16.773,16.773,0,0,0-6.18,1.1,13.8,13.8,0,0,0-7.94,7.79,15.629,15.629,0,0,0-1.12,5.99,17.438,17.438,0,0,0,.98,5.93,13.738,13.738,0,0,0,2.81,4.72,12.871,12.871,0,0,0,4.46,3.12A14.942,14.942,0,0,0,595,655.4a15.434,15.434,0,0,0,6.27-1.17,11.124,11.124,0,0,0,4.41-3.47l-2.68-2.82a1.3,1.3,0,0,0-.46-0.31A1.343,1.343,0,0,0,601.483,647.674Zm5.28-21.73v5.36h8.2v23.78h6.76V631.3h8.2v-5.36h-23.16Zm52.479,21.24,0.32-1.92q0.041-.221.06-0.42c0.013-.133.02-0.26,0.02-0.38a1.6,1.6,0,0,0-.42-1.25,1.724,1.724,0,0,0-1.18-.37h-2.18l0.84-4.72h1.26a3.4,3.4,0,0,0,1.93-.43,2.061,2.061,0,0,0,.79-1.37l0.48-2.52h-3.88l1.04-5.82a0.918,0.918,0,0,0,.02-0.17v-0.15a1.568,1.568,0,0,0-.55-1.24,2.1,2.1,0,0,0-1.43-.48H653.6l-1.4,7.86h-3.32l1.4-7.86h-2.84a2.847,2.847,0,0,0-1.7.53,2.185,2.185,0,0,0-.9,1.47l-1.04,5.86h-1.36a3.344,3.344,0,0,0-1.93.44,2.086,2.086,0,0,0-.79,1.36l-0.48,2.52h3.98l-0.84,4.72h-3.54l-0.32,1.92q-0.041.22-.06,0.42c-0.013.133-.02,0.26-0.02,0.38a1.6,1.6,0,0,0,.42,1.25,1.724,1.724,0,0,0,1.18.37h1.76l-1.4,7.9h2.76a3.594,3.594,0,0,0,.93-0.12,2.687,2.687,0,0,0,.83-0.38,2.278,2.278,0,0,0,.64-0.67,2.689,2.689,0,0,0,.36-0.99l0.98-5.74h3.3l-0.96,5.44a2.132,2.132,0,0,0-.03.22c-0.007.08-.01,0.153-0.01,0.22a2.222,2.222,0,0,0,.14.79,2.027,2.027,0,0,0,.38.64,1.818,1.818,0,0,0,.57.43,1.6,1.6,0,0,0,.71.16h2.88l1.4-7.9h3.96Zm-10.94-9.06h3.32l-0.84,4.72h-3.32Zm32.459-12.18h-5.92l-13.48,18.12,0.64,3.06a1.529,1.529,0,0,0,.59.9,1.683,1.683,0,0,0,1.05.36h11.72v6.7h5.4v-6.7h1.8a1.115,1.115,0,0,0,1.2-1.14v-3.48h-3v-17.82Zm-5.4,17.82h-7.5l7.7-10.78q-0.1.859-.15,1.67t-0.05,1.51v7.6Z"
        />
      </g>
      <use
        id="check-white_kopia_3"
        data-name="check-white kopia 3"
        x="746"
        y="620"
        xlinkHref="#image"
        className={`intro-animation__check ${activate(6)}`}
        style={{ transformOrigin: `${746 + 27}px ${620 + 20}px` }} // 54 41
      />
      <path
        id="Kształt_1"
        data-name="Kształt 1"
        className={`intro-animation__cls-3 intro-animation__node-path ${activate(
          1
        )}`}
        d="M234.27,126v44.282H435.059V217"
      />
      <path
        id="Kształt_133"
        data-name="Kształt 133"
        className={`intro-animation__cls-3 intro-animation__node-path-over ${activate(
          1
        )}`}
        d="M234.27,126v44.282H435.059V217"
      />
      <path
        id="Kształt_1_kopia"
        data-name="Kształt 1 kopia"
        className={`intro-animation__cls-3 intro-animation__node-path ${activate(
          3
        )}`}
        d="M435.011,316v44.282H234V407"
      />
      <path
        id="Kształt_1_kopia"
        data-name="Kształt 1 kopia"
        className={`intro-animation__cls-3 intro-animation__node-path-over ${activate(
          3
        )}`}
        d="M435.011,316v44.282H234V407"
      />
      <path
        id="Kształt_1_kopia_2"
        data-name="Kształt 1 kopia 2"
        className={`intro-animation__cls-3 intro-animation__node-path is-long ${activate(
          5
        )}`}
        d="M234.989,504v44.282H640V595"
      />
      <path
        id="Kształt_1_kopia_2"
        data-name="Kształt 1 kopia 2"
        className={`intro-animation__cls-3 intro-animation__node-path-over is-long ${activate(
          5
        )}`}
        d="M234.989,504v44.282H640V595"
      />
    </svg>
  );
};