import React from 'react';
import "../theme/style";

export const NotificationBubble = (props: any) => {

    // TODO: convert large numbers to short hand 1k 1M etc

    return <span className='lm-nav-bubble-wrapper'>
        <span className='lm-nav-bubble'>
            {props.children}
        </span>
    </span>
}

export const NavButton = (props: navButtonProps) => {

    return <div className={`lm-nav-button ${props.selected ? 'lm-nav-button--selected' : ''}`}>
            <div onClick={(!props.selected && props.onClick) && props.onClick}>
            {(props.showNotificationsOnSelected && props.selected) || !props.selected ?
                <div>
                    {props.notifications && props.notifications.length > 0 &&
                    <NotificationBubble>{props.notifications[0]}</NotificationBubble>}
                    <span style={{flex: '2'}}>{props.children}</span>
                    {props.notifications && props.notifications.length > 1 &&
                    <NotificationBubble>{props.notifications[1]}</NotificationBubble>}
                </div>
            : <div><span>{props.children}</span></div>
            }
            </div>
        </div>
    
}

