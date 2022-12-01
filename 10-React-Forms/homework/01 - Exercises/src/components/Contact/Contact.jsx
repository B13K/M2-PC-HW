import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs){
  let errors = {}
  if(inputs.name === ''){
    errors['name'] = "Se requiere un nombre";
  }
  if(!regexEmail.test(inputs.email)) errors['email'] = "Debe ser un correo electrónico";
  if(inputs.phone < 1) errors['phone'] = "Sólo números positivos"
  if(!inputs.subject) errors['subject'] = "Se requiere un asunto";
  if(!inputs.message) errors['message'] = "Se requiere un mensaje"

  return errors
}

export default function Contact () {

 
  let [inputs, setInputs] = React.useState({
    name: "",
    email: '',
    phone: 0,
    subject: '',
    message: ''
  })

  let [errors, setErrors] = React.useState({
    name: "",
    email: '',
    phone: '',
    subject: '',
    message: ''

  })

  function handleSubmit(e){
    e.preventDefault();
    if(Object.entries(errors).length === 0){
      alert('Datos completos')
      setInputs({
        name: "",
        email: '',
        phone: 0,
        subject: '',
        message: ''
      })
      setErrors(validate({
        name: "",
        email: '',
        phone: '',
        subject: '',
        message: ''
    
      }))
    }
    else{
      alert('Debes corregir los errores')
    }

  }





  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      // [e.target.email]: e.target.value,
      // [e.target.phone]: e.target.value,
      // [e.target.subject]: e.target.value,
      // [e.target.message]: e.target.value,
    })
    setErrors(validate({
      ...inputs,
      [e.target.name]: e.target.value,
      // [e.target.email]: e.target.value,
      // [e.target.phone]: e.target.value,
      // [e.target.subject]: e.target.value,
      // [e.target.message]: e.target.value,
    }))
  }


  return (
    <div>
      <div>Crear Formulario</div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input value={inputs.name} name='name' placeholder='Escribe tu nombre...' type='text' onChange={handleChange} className={errors.name && 'warning'}/>
        { !errors.name ? null : <p className='danger'>{errors.name}</p>}
        <label>Correo Electrónico:</label>
        <input value={inputs.email} name='email' placeholder='Escribe tu email...' type='text' onChange={handleChange} className={errors.email && 'warning'}/>
        { !errors.email ? null : <p className='danger'>{errors.email}</p>}
        <label>Teléfono:</label>
        <input value={inputs.phone} name='phone' placeholder='Escribe un teléfono...' type='number' onChange={handleChange} className={errors.phone && 'warning'}/>
        { !errors.phone ? null : <p className='danger'>{errors.phone}</p>}
        <label>Asunto:</label>
        <input value={inputs.subject} name='subject' placeholder='Escribe el asunto...' type='text' onChange={handleChange} className={errors.subject && 'warning'}/>
        { !errors.subject ? null : <p className='danger'>{errors.subject}</p>}
        <label>Mensaje:</label>
        <textarea value={inputs.message} name='message' placeholder='Escribe tu mensaje...' type='text' onChange={handleChange} className={errors.message && 'warning'}/>
        { !errors.message ? null : <p className='danger'>{errors.message}</p>}
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )

}
