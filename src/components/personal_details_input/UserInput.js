import React, {useState} from 'react'
import './UserInput.css'

function UserInput(props){
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')

    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault()
        const userData = {
            "username": username,
            "age": age,
            "id": Math.random().toString()
        }
        props.onSaveNewUser(userData)
        setUsername('')
        setAge('')
    }

    return(
        <form className='box-size' onSubmit={submitHandler}>
            <div className="container">
                <label className="margin">Username</label>
                <input className="inputs margin" value={username} type="text"
                       minLength='5' onChange={usernameHandler} required/>
            </div>
            <div className="container">
                <label className="margin">Age</label>
                <input className="inputs margin" value={age} type='number'
                       min="18" onChange={ageHandler} required/>
            </div>
            <button className="addButton margin">Add User</button>
        </form>
    )
}

export default UserInput