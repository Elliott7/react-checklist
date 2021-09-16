import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import UserInput from "./components/personal_details_input/UserInput";
import OutputDisplay from "./components/output_display/OutputDisplay";


function App() {
    const [userData, setUserData] = useState([])

    const onGetNewUser = (submittedData) => {
        setUserData((prevState) => {
            return([
                ...prevState,
                submittedData
            ])
        })
    }

    const deleteInput = (itemToDelete) => {
        setUserData((prevState) => {
            return( [
                ...prevState.filter((data) => {
                    return (data.id !== itemToDelete)
                })
            ])
        })
    }

  return (
    <div className="App">
      <header className="App-header">
        <UserInput onSaveNewUser={onGetNewUser} />
        <OutputDisplay data={userData} deleteFunction={deleteInput} />
      </header>
    </div>
  );
}

export default App;
