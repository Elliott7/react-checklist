import React, {} from 'react'
import "./ErrorModal.css"
import Button from "../UI/Button";

function ErrorModal(props){
    return(
        <div>
            <div className="backdrop" onClick={props.closeButton} />
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
        </div>
    )
}

export default ErrorModal