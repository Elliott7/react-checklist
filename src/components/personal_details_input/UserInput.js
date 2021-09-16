import React, {useState} from 'react'
import ErrorModal from "../modal/ErrorModal";
import Button from "../UI/Button";
import styles from '../output_display/Display.module.css'

function UserInput(props) {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState()

    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const resetError = () => {
        setError(null)
    }

    function submitHandler(event) {
        event.preventDefault()
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                "title": "Invalid input",
                "message": 'Please enter a valid name and age'
            })
            return;
        }
        if (+age <= 18 || +age >= 150) {
            setError({
                title: "Invalid age",
                message: 'Please enter a valid age'
            })
            return;
        }
        const userData = {
            "username": username,
            "age": age,
            "id": Math.random().toString()
        }
        props.onSaveNewUser(userData)
        setUsername('')
        setAge('')
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} closeButton={resetError}/>}
            <form className={`${styles.boxSize} ${styles.minHeight}`} onSubmit={submitHandler}>
                <div className={`${styles.container} ${styles.flexCol}`}>
                    <label htmlFor="input-username" className={styles.margin}>Username</label>
                    <input id="input-username"
                           className={`${styles.inputs} ${styles.margin}`}
                           value={username} type="text"
                           // minLength='5'
                           onChange={usernameHandler}/>
                </div>
                <div className={`${styles.container} ${styles.flexCol}`}>
                    <label htmlFor="input-age" className={styles.margin}>Age</label>
                    <input id="input-age"
                           className={`${styles.inputs} ${styles.margin}`} value={age} type='number'
                           // min="18"
                           onChange={ageHandler}/>
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </div>
    )
}

export default UserInput