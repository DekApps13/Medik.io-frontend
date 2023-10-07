import { useState } from "react"
import { Navigate } from 'react-router-dom'
import Footer from "../components/various/Footer"
import axios from 'axios'
import swa from 'sweetalert2'

const SignUp = () => {
  const estilo = {margin: '5rem 0 0 0', paddingLeft: '3rem'}
  //Inicializar Valores
  const initial_val = {
    user:"",
    password:"",
    name:"",
    email:""
  }

  const [user, setUser] = useState(initial_val)
  const [redirect, setRedirect] = useState(false)

  //Metodo onChange
  const onchange = (event)=>{
    setUser({...user, [event.target.name]:event.target.value})
  }

  //Metodo onSubmit
  const onsubmit = async (event)=>{
    event.preventDefault()

    try{
      const URL = "http://localhost:8080/auth/register"
      const CONFIG = { headers: {'Content-Type':'application/json'} }
      const response = await axios.post(URL, user, CONFIG)
      if (response.status == 201) {  // Validar el codigo status que responde Axios
        swa.fire({
          title: '<strong>Excelente</strong>',
          icon: 'success',
          html:
            'Bienvenido <b>' + response.data.newUser.user +'</b>, </br>' +
            'Ahora, por favor inicia sesión',
          focusConfirm: true,
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: 'Thumbs up, great!',
          cancelButtonAriaLabel: 'Thumbs down'
        })
        setRedirect(true)
      }
    }catch(err){
      swa.fire(
        'Vaya!!',
        `${err.response.data.message}`,
        'error'
      )
    }
  }

  if (redirect)
    return <Navigate to="/" />
  return (
    <>
      <section className="contact_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2 style={estilo}>REGISTRATE</h2>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="form_container">
                <form onSubmit={onsubmit}>
                  <div>
                    <input type="text" name="user" value={user.user} onChange={onchange}    placeholder="Usuario"/>
                  </div>
                  <div>
                    <input type="password" name="password" value={user.password} onChange={onchange} placeholder="Contraseña"/>
                  </div>
                  <div>
                    <input type="text" name="name" value={user.name} onChange={onchange} placeholder="Nombre Completo"/>
                  </div>
                  <div>
                    <input type="email" name="email" value={user.email} onChange={onchange} placeholder="E-mail" />
                  </div>
                  <div className="btn_box">
                    <button type="submit">REGISTRARSE</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5">
              <div className="img-box">
                <img src="images/contact-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SignUp