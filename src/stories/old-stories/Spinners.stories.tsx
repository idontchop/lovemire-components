import React from "react";
import {
  Spinner as DefaultSpinner,
  FlirvySpinner,
} from "../../components-old/Spinners";
import "../../theme/style";

export default {
  title: "Old/Spinners",
  component: DefaultSpinner,
};

export const Spinner = () => <DefaultSpinner fast />;

export const Flirvy = () => <FlirvySpinner fast />;
