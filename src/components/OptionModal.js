import React from 'react';
import Modal from 'react-modal';
const OptionModal = (props)=>{
    return(
        <Modal
            isOpen={!!props.selectOption}
            onRequestClose={props.handleModal}
            contentLabel="selected option"
            className='modal'
        >
            <h3>selected option</h3>
    {props.selectOption && <p> { props.selectOption}</p>}
    <button
        onClick ={props.handleModal}
    >close</button>

        </Modal>
    );
}
export default OptionModal;
