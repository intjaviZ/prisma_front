import { createContext, useContext, useState } from 'react';

const FiltroContext = createContext();

export const FiltroProvider = ({ children }) => {
  const [filtros, setFiltros] = useState({
    grupo: '',
    dimension: '',
    evaluacion: '',
  });

  const actualizarFiltro = (campo, valor) => {
    setFiltros(prev => ({ ...prev, [campo]: valor }));
  };

  const limpiarFiltros = () => {
    setFiltros({ grupo: '', dimension: '', evaluacion: '' });
  };

  return (
    <FiltroContext.Provider value={{ filtros, actualizarFiltro, limpiarFiltros }}>
      {children}
    </FiltroContext.Provider>
  );
};

export const useFiltro = () => useContext(FiltroContext);
