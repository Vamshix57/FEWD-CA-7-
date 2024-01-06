import './App.css'
import Navbar from './Navbar'
import RegistrationPage from './Components/registration'
import {Routes,Route} from 'react-router-dom'
import Books from './Components/Books'
import { useState } from 'react'
function App() {
const [FormSubmit, setFormSubmit] = useState(false);
const [findBook, setFIndBook] = useState("");
return (
  <>
    <Navbar check={{ FormSubmit, setFormSubmit, findBook, setFIndBook }} />
    
    <Routes>
      <Route
        path={"/Form"}
        element={
          <RegistrationPage
            check={{ FormSubmit, setFormSubmit, findBook, setFIndBook }}
          />
        }
      />
      <Route
        path={"/"}
        element={<Books check={{ FormSubmit, findBook, setFIndBook }} />}
      />
    </Routes>
  </>
);
}

export default App
