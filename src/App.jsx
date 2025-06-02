import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/inicio'
import Test from './pages/Test'
import ChatIA from './pages/ChatIA'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
      <Route path='/chat' element={<ChatIA/>}></Route>
    </Routes>
  )
}

export default App
