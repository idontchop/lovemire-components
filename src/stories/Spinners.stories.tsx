import React from "react";
import {Spinner as DefaultSpinner, FlirvySpinner} from "../components/Spinners";
import '../theme/style';

export default {
  title: "Spinners",
  component: DefaultSpinner,
};

export const Spinner = () => <DefaultSpinner fast />

export const Flirvy = () => <FlirvySpinner fast />