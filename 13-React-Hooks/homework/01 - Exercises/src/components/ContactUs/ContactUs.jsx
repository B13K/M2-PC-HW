import React from "react";
import { useDispatch } from 'react-redux'
import { enviarForm } from '../../redux/actions/actions.js'

const ContactUs = () => {

  const dispatch = useDispatch();

  const obj = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  }

  const [form, setForm] = React.useState(obj)

  function handleInput(e){
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit(){
    dispatch(enviarForm(form))
    setForm(obj)
  }




  return (
    <div className="contactBg">
      <input name="nombre" onChange={handleInput}></input>
      <input name="email" onChange={handleInput}></input>
      <input name="asunto" onChange={handleInput}></input>
      <input name="mensaje" onChange={handleInput}></input>
      <button onClick={handleSubmit}>ENVIAR</button>
    </div>
  );
};

export default ContactUs;
