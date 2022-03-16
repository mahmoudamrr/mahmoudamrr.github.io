/** @jsx jsx */
import * as React from "react";
import { keyframes, css, jsx } from "@emotion/react";

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const upDownWide = keyframes`
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(200px);
  }
`;

const upDownWideRotate = keyframes`
  from {
    transform: translateY(0) rotate(0deg);
  }
  to {
    transform: translateY(-30rem) rotate(50deg)
  }
`;

const opacity = keyframes`
0%   { opacity: 0; };
100% { opacity: 1; };
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg) scale(0.5, 0.5);
  }
  to {
    transform: rotate(360deg) scale(1.5, 1.5);
  }
`;

const flip = keyframes`
  from {
    transform: translateY(0) rotate(20deg) scale(-1, -1);
  }
  to {
    transform: translateY(10px) rotate(30deg) scale(-1, -1);
  }
`;

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`;

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`;

const upDownWideRotateAnimation = css`
  ${upDownWideRotate} 18s ease-in-out infinite alternate;
`;

const upDownOpacityAnimation = css`
  ${opacity} 10s ease-in-out infinite alternate, ${upDownWide} 10s ease-in-out infinite alternate
`;

const rotateAnimation = css`
  ${rotate} 12s ease-in-out infinite alternate;
`;

const flipAnimation = css`
  ${flip} 20s ease-in-out infinite alternate;
`;

export function UpDown({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${upDownAnimation};
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  );
}

export function UpDownWide({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${upDownWideAnimation};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  );
}

export function UpDownWideRotate({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${upDownWideRotateAnimation};
        position: absolute;
        width: 60px;
        height: 80px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  );
}

export function UpDownOpacity({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${upDownOpacityAnimation};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  );
}

export function Rotatee({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${rotateAnimation};
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  );
}

export function FlipSatellite({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${flipAnimation};
        position: relative;
        width: 50px;
        height: 80px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  );
}

export const waveAnimation = (length: string) =>
  `${wave} ${length} linear infinite alternate`;
