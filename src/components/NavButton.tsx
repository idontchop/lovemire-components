import styled from 'styled-components'
import React from 'react'

const NavSelectButton = styled.div`
outline: none;
width: 100%;
border-radius: 0;
border: none;
padding: 8px;
font-size: 0.8em;
font-family: 'Roboto', serif;
background-color: white;
box-shadow: inset 0 -2px 5px #CAB5B5;
color: #707070;
text-align: center;

@media (max-width: 600px) {
    font-size: 0.8em;
}

p {
    font-size: 1em;
    font-family: 'Roboto', serif;
    margin: 1vh;
}

`

const NavSelectedButton = styled.div`
outline: none;
width: 80%;
border-radius: 20px;
border: none;
padding: 5px;
margin: auto;
font-size: 0.8em;
font-family: 'Roboto', serif;
background-color: #CAB5B5;
box-shadow: inset 0 2px 6px rgba(0,0,0,0.4);
color: #707070;
text-align: center;

@media (max-width: 600px) {
    font-size: 0.8em;
}

p {
    font-size: 1em;
    font-family: 'Roboto', serif;
    margin: 1vh;
}

`

export const NavButton = (props: navButtonProps) => {

    if (props.selected) {
        return <div style={{padding: '5px', width: '100%'}}>
                <NavSelectedButton>{props.children}</NavSelectedButton>
            </div>
    } else {
        return <NavSelectButton onClick={() => props.onClick() }>
                {props.children}
            </NavSelectButton>
    }
}

