import styled from 'styled-components'
import React from 'react'

const NavSelectButton = styled.div`
outline: none;
box-sizing: border-box;
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

const NavUnSelectedWrapper = styled.div`
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
`

const ChildrenDiv = styled.div`
    display: flex;
    width: 100%;
    
    span {
        margin: auto;
    }

`

const NotificationCountWrapper = styled.span`
    margin: auto;
    display: inline-block;
    text-align: center;
    overflow: hidden;
    flex: 1;
`

const NotificationCount = styled.span`
    color: white;
    background-color: #a17a7a;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 5px;
    padding: 2px 3px;
    margin: auto;
    display: inline-block;
    text-align: center;
`

export const NotificationBubble = (props: any) => {

    // TODO: convert large numbers to short hand 1k 1M etc

    return <NotificationCountWrapper>
        <NotificationCount>
            {props.children}
        </NotificationCount>
    </NotificationCountWrapper>
}

export const NavButton = (props: navButtonProps) => {

    if (props.selected) {
        return <NavUnSelectedWrapper>
                <NavSelectedButton>
                {!!props.showNotificationsOnSelected && 
                    <ChildrenDiv>
                        {props.notifications && props.notifications.length > 0 &&
                        <NotificationBubble>{props.notifications[0]}</NotificationBubble>}
                        <span>{props.children}</span>
                        {props.notifications && props.notifications.length > 1 &&
                        <NotificationBubble>{props.notifications[1]}</NotificationBubble>}
                    </ChildrenDiv>}
                {!props.showNotificationsOnSelected && <span>{props.children}</span>}
                </NavSelectedButton>
            </NavUnSelectedWrapper>
    } else {
        return <NavSelectButton onClick={() => props.onClick() }>
                <ChildrenDiv>

                    {props.notifications && props.notifications.length > 0 &&
                    <NotificationBubble>{props.notifications[0]}</NotificationBubble>}
                    <span style={{flex: "2"}}>{props.children}</span>
                    {props.notifications && props.notifications.length > 1 &&
                    <NotificationBubble>{props.notifications[1]}</NotificationBubble>}

                </ChildrenDiv>
            </NavSelectButton>
    }
}

