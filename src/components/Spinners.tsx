import React from 'react'
import FLIRVY_SPINNER from '../images/flirvy-spinner.png';
import { SpinnerProps } from './Spinners.types';

export const Spinner = ({fast, slow, flirvy}: SpinnerProps) => {

  let speed = fast ? 'lm-rotate-fast' : slow ? 'lm-rotate-slow': '';
  return flirvy ? <img className={speed} src={FLIRVY_SPINNER} /> :
    <div className={speed + ' lm-default-spinner'} />
}

export const FlirvySpinner = (props: SpinnerProps) => <Spinner flirvy {...props} />;