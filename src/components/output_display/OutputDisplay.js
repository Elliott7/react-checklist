import React from 'react'
import styles from './OutputDisplay.module.css'
import '../personal_details_input/UserInput.css'

function OutputDisplay(props) {

    const deleteHandle = (event) => {
        props.deleteFunction(event.target.id)
    }

    let display = props.data.map((item) => {
        return(
            <div className={styles.container} id={item.id} key={item.id} onClick={deleteHandle}>
                <span className={styles.margin} id={item.id} >{item.username}</span>
                <span className={styles.margin} id={item.id}>{item.age}</span>
            </div>
        )
    })

    return (
        <div className={styles.boxSize}>
            {display}
        </div>
    )
}

export default OutputDisplay