import Form from './components/Form';
import { useCitas } from './hooks/useCitas';
import { useEffect } from 'react';
import CitaItem from './components/CitaItem';
const ls = localStorage;
const initialState = () => JSON.parse(ls.getItem('citas') || []);

const App = () => {
  const { cita, createCita, deleteCita } = useCitas(initialState);
  useEffect(() => {
    ls.setItem('citas', JSON.stringify(cita));
  }, [cita]);

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createCita={createCita} />
          </div>
          <h1>Administra tus citas</h1>
          <div className="one-half column">
            {cita.length ? (
              cita.map((cita) => (
                <CitaItem cita={cita} key={cita.id} deleteCita={deleteCita} />
              ))
            ) : (
              <h2>No hay citas</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
