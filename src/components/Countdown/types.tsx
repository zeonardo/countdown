import React from "react";

export default interface CountdownProps {
  defaultTime?: Time
}

export interface Time {
  hours: number,
  minutes: number,
  seconds: number,
}