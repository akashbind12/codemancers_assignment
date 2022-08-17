import { useState } from 'react'
import './App.css';
import { Contactcard } from "./components/post"
import {Inputbar} from "./Components/inputbar"

function App() {
  const [detail, setDetail] = useState({
    "name" : "",
    "email": "",
    "photo": "",
    "contact" : "",
  })

   const [contacts, setContacts] = useState([])

  const handledetail = (e) => {
    setDetail({
      ...detail,
      [e.target.name] : e.target.value
    })
    // console.log(detail)
  }

  const handlesubmit = (e) => {
    e.preventDefault();

    setContacts([...contacts, detail])
    console.log(contacts)
  }



  return (
    <div className="App">
      {/* <h1>Add Contacts</h1>
      <form action="submit" onSubmit={handlesubmit} >
        <input name='name' type="text" placeholder='name' onChange={handledetail} />
        <input name='email' type="text" placeholder='email' onChange={handledetail} />
        <input name='photo' type="text" placeholder='image url' onChange={handledetail} />
        <input name='contact' type="number" placeholder='contact number' onChange={handledetail} />
        <input type="submit" />
      </form> */}
      <Inputbar></Inputbar>
      <Contactcard contacts={contacts}></Contactcard>
      
    </div>
  )
}

export default App