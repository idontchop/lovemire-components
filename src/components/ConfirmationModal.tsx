import React, {useState, useEffect} from 'react'
import { SelectButton } from './Buttons'

const ConfirmationModal = (props: ConfirmationModalProps) => {

    // Keeps from clicking ok twice
    // We don't do it for cancel since it should only remove the modal
    const [okSelected, setOkSelected] = useState(false)

    useEffect( () => {
        setOkSelected(false)
    },[props])

    return (
        <div className='lm-outer-modal'
            onClick={ (e) => {e.stopPropagation(); props.onCancel();} }>
            <div className='lm-inner-modal' 
                onClick= { (e) => e.stopPropagation()}>
                <div style={{maxWidth: '180px', maxHeight: '180px'}}>
                    {props.children}
                </div>
                <div className='lm-confirmation'>
                    <SelectButton noCheckBox 
                        selected={okSelected}
                        onClick={() => {                        
                            !okSelected && props.onConfirm()
                            setOkSelected(true)
                        }}>
                            {props.okButtonText || 'Ok'}
                        </SelectButton>
                    <SelectButton noCheckBox selected={false}
                        onClick={() => props.onCancel()}>
                            {props.cancelButtonText || 'Cancel'}
                        </SelectButton>
                </div>
                <div className='lm-confirmation-footer'>
                    <p>{props.message && props.message}</p>
                </div>
            </div>
        </div>)

}

export default ConfirmationModal;