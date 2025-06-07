import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/inicio'
import Test from './pages/Test'
import ChatIA from './pages/ChatIA'
import Resultado from './pages/Resultado'
import PreguntasFrec from './pages/PreguntasFrec'
import Vr from './pages/vr'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
      <Route path='/chat' element={<ChatIA/>}></Route>
      <Route path='/resultado' element={<Resultado/>}></Route>
      <Route path='/preguntasFrec' element={<PreguntasFrec/>}></Route>
      <Route path='/vr' element={<Vr/>}></Route>
    </Routes>
  )
}

export default App
