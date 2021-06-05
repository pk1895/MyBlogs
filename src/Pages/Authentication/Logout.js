import React from "react";
import Modal from '../../components/UI/Modal';
import classes from './Logout.module.css';

const Logout = (props) => {

    return (
        <Modal onClick={props.onCancel} >
            <div className={classes.total}>Are you sure, you want to log out?</div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCancel}>Cancel</button>
                <button className={classes.button} onClick={props.onConfirm}>Confirm</button>
            </div>
        </Modal>
    );
}

export default Logout;