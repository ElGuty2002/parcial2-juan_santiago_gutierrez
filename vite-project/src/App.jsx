/* eslint-disable no-unused-vars */
import { useState } from 'react'

//importando los modulos de firebase
import appFireBase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFireBase)

// importar nuestros componentes
import Login from '../src/components/Login'
import Home from '../src/components/Home'

import './App.css'

function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) =>{
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else
    {
      setUsuario(null)
    }
  })

  const [count, setCount] = useState(0)

  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email} /> : <login/>}
    </div>
  )
}

export default App
