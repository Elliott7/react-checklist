import React from 'react'
import ReactDOM from "react-dom";
import "./ErrorModal.css"
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";

// Backdrop function
function Backdrop(props) {
    return(
        <div className="backdrop" onClick={props.closeButton} />
    )}

// Main Modal Overlay
function ModalOverlay(props){
    return(
        <div className="modal">
            <header className="header">
                <h2>
                    {props.title}
                </h2>
            </header>
            <div className="content">
                <p>
                    {props.message}
                </p>
            </div>
            <footer className="actions">
                <Button onClick={props.closeButton}>Okay</Button>
            </footer>
        </div>
    )}

// Main ErrorModal Componant
function ErrorModal(props){
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop closeButton={props.closeButton} />,
                document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} closeButton={props.closeButton} />,
                document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}
export default ErrorModal