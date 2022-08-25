import React from "react";
import { Time } from "../types";

export default interface TimeInputProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  defaultTime: Time
  active: boolean,
  onSubmit: (time: Time) => void
}