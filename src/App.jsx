import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/inicio'
import Test from './pages/Test'
import ChatIA from './pages/ChatIA'
import Resultado from './pages/Resultado'
import PreguntasFrec from './pages/PreguntasFrec'
import Vr from './pages/vr'
import LayoutOrientador from './orientador/pages/LayoutOrientador'
import InicioOrientador from './orientador/pages/InicioOrientador'
import Comentarios from './orientador/pages/Comentarios'
import NuevoRecurso from './orientador/pages/NuevoRecurso'
import Seguimientos from './orientador/pages/Seguimientos'
import { FiltroProvider } from './orientador/contextos/FiltroContext'
import NuevoEntorno from './orientador/componentes/NuevoEntorno'
import NuevaPreguntaFrec from './orientador/componentes/NuevaPreguntaFrec'
import NuevoRecursoInicio from './orientador/componentes/NuevoRecursoInicio'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
      <Route path='/chat' element={<ChatIA/>}></Route>
      <Route path='/resultado' element={<Resultado/>}></Route>
      <Route path='/preguntasFrec' element={<PreguntasFrec/>}></Route>
      <Route path='/vr' element={<Vr/>}></Route>
      <Route path='orientador/' element={<FiltroProvider> <LayoutOrientador /> </FiltroProvider>}>
        <Route index element={<InicioOrientador />} />
        <Route path='inicio' element={<InicioOrientador />} />
        <Route path='comentarios' element={<Comentarios />} />
        <Route path='seguimientos' element={<Seguimientos />} />
        <Route path='nuevoRecurso/' element={<NuevoRecurso />} >
          <Route index element={<NuevoRecursoInicio />} />
          <Route path='entornoVr' element={<NuevoEntorno />} />
          <Route path='preguntaComun' element={<NuevaPreguntaFrec />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;