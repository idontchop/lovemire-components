import React from 'react'
import styled, {keyframes} from 'styled-components';
//import FlirvySpinner from '../images/flirvy-spinner.png'
// come back to this i guess
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const DefaultSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const Spinner = () => {

    return <DefaultSpinner>
    </DefaultSpinner>
}