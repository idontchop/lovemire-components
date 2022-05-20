import React, {useState, useEffect, useRef} from 'react'
import styled, {keyframes, css} from 'styled-components'
import { SelectButton } from './Buttons'

const OuterModal = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.5);
    z-index: 98;

`

const InnerModal = styled.div`

    z-index: 99;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;

    box-shadow: 3px 3px 17px 3px #000000;

    background-color: ${props => 
        props.theme?.colors?.primary ? props.theme.colors.primary : '#707070'};

    position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

`

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px 0 0 0;
    padding: 0;
    box-sizing: border-box;

    button {
        flex: 1;
        text-align: center;
        box-sizing: border-box;
    }

    p {
        text-align: center;
    }
`

const ChildrenDiv = styled.div`
    max-width: 180px;
    max-height: 180px;
`

const MessageP = styled.p`
    font-size: 0.7em;
    padding: 0;
    margin: 5px 0;

`

const ConfirmationModal = (props: ConfirmationModalProps) => {

    // Keeps from clicking ok twice
    // We don't do it for cancel since it should only remove the modal
    const [okSelected, setOkSelected] = useState(false)

    useEffect( () => {
        setOkSelected(false)
    },[props])

    return <OuterModal onClick={ (e) => {e.stopPropagation(); props.onCancel();} }>
        <InnerModal onClick= { (e) => e.stopPropagation()}>
            <ChildrenDiv>
                {props.children}
            </ChildrenDiv>
            <ButtonDiv>
                <SelectButton noCheckBox 
                    selected={okSelected}
                    onClick={() => {                        
                        !okSelected && props.onConfirm()
                        setOkSelected(true)
                    }}>
                        Ok
                    </SelectButton>
                <SelectButton noCheckBox selected={false}
                    onClick={() => props.onCancel()}>
                        Cancel
                    </SelectButton>
            </ButtonDiv>
            <MessageP>{props.message && props.message}</MessageP>
        </InnerModal>
    </OuterModal>

}

export default ConfirmationModal;