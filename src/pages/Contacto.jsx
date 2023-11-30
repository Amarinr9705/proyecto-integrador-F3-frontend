import './Contacto.scss'

const Contacto = () => {
  return (
    <>
    <div className="form__container">
        <form method="post" className="form">
            <h4 className="form__title">Formulario de contacto</h4>
            <label htmlFor="name">Nombre Completo</label>
            <input type="text" id="name"  name="name" required/>
            <label htmlFor="tel">Teléfono de Contacto</label>
            <input type="text" id="tel"  name="tel" required/>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" required/>
            <label htmlFor="message">Mensaje</label>
            <textarea className="form__message message" id="message" cols="30" rows="10" required></textarea>
            <button type="submit" className="">Enviar</button>
        </form>
    </div>
    </>
  )
}

export default Contacto