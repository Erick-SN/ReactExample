import Form from './components/Form';
import { useCitas } from './hooks/useCitas';
import CitaItem from './components/CitaItem';
const App = () => {
  const { cita, createCita } = useCitas();
  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createCita={createCita} />
          </div>
          <div className="one-half column">
            {cita.length ? (
              cita.map((cita) => <CitaItem cita={cita} key={cita.id} />)
            ) : (
              <p>No hay citas</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
