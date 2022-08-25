import React from "react";

export default interface ActionProps {
  paused: boolean,
  onPause: (event: React.MouseEvent<HTMLButtonElement>) => void,
  onReset: (event: React.MouseEvent<HTMLButtonElement>) => void,
}