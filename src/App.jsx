import './App.css'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Cargando from './componentes/general/Cargando'
import Inicio from './pages/Inicio'
import { FiltroProvider } from './orientador/contextos/FiltroContext'

const NoEncontrado = lazy(() => import('./componentes/general/NoEncontrado'))
const Test = lazy(() => import('./pages/Test'))
const ChatIA = lazy(() => import('./pages/ChatIA'))
const Resultado = lazy(() => import('./pages/Resultado'))
const PreguntasFrec = lazy(() => import('./pages/PreguntasFrec'))
const Vr = lazy(() => import('./pages/vr'))
const LayoutOrientador = lazy(() => import('./orientador/pages/LayoutOrientador'))
const InicioOrientador = lazy(() => import('./orientador/pages/InicioOrientador'))
const Comentarios = lazy(() => import('./orientador/pages/Comentarios'))
const NuevoRecurso = lazy(() => import('./orientador/pages/NuevoRecurso'))
const Seguimientos = lazy(() => import('./orientador/pages/Seguimientos'))

const NuevoEntorno = lazy(() => import('./orientador/componentes/NuevoEntorno'))
const NuevaPreguntaFrec = lazy(() => import('./orientador/componentes/NuevaPreguntaFrec'))
const NuevoRecursoInicio = lazy(() => import('./orientador/componentes/NuevoRecursoInicio'))


function App() {
  return (
    <Suspense fallback={<Cargando />}>
      <Routes>
        <Route index element={<Inicio />}></Route>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/chat' element={<ChatIA />}></Route>
        <Route path='/resultado' element={<Resultado />}></Route>
        <Route path='/preguntasFrec' element={<PreguntasFrec />}></Route>
        <Route path='/vr' element={<Vr />}></Route>
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
        <Route path='*' element={<NoEncontrado />}></Route>
      </Routes>
    </Suspense>
  )
}

export default App;