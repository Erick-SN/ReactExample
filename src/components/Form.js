import { useForm } from '../hooks/useForm';

const Form = ({ createCita }) => {
  const { state, error, handleChange, resetState, setError } = useForm({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });
  const { mascota, propietario, fecha, hora, sintomas } = state;

  const submitCita = (e) => {
    e.preventDefault();
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      setError(true);
      return;
    }
    setError(false);
    state.id = new Date().getTime();
    createCita(state);
    resetState();
  };
  return (
    <>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Mascota</label>
        <input
          type="text"
          name="mascota"
          value={mascota}
          onChange={handleChange}
          className="u-full-width"
          placeholder="mascota"
        />
        <label>Propietario</label>
        <input
          type="text"
          name="propietario"
          value={propietario}
          onChange={handleChange}
          className="u-full-width"
          placeholder="Madre/Padre"
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={fecha}
          onChange={handleChange}
          className="u-full-width"
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={hora}
          onChange={handleChange}
          className="u-full-width"
        />
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          value={sintomas}
          onChange={handleChange}
          className="u-full-width"
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Form;
