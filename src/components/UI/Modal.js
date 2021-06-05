import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop}></div>
    );
}

const Overlay = (props) => {
    return (
        <div className={classes.modal}>{props.children}</div>
    );
}

const modalElement = document.getElementById('modal');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, modalElement)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, modalElement)}
        </Fragment>
    );
}

export default Modal;