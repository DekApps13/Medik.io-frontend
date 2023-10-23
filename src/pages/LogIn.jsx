import Footer from '../components/various/Footer'
import { useState } from 'react'
import axios from 'axios'
import swa from 'sweetalert2'
import { Link } from 'react-router-dom'

const LogIn = () => {
  //Inicializar valores en una sola linea
  const [user, setUser] = useState({user:"", password:""})

  //Input onChange
  const writeText = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  //Form onSubmit
  const onFormSubmit = async (event) => {
    event.preventDefault()
    try{
      const URL = "http://localhost:8080/auth/login"
      const CONFIG = { headers: {'Content-Type':'application/json'} }
      const response = await axios.post(URL, user, CONFIG)
      if (response.status == 200) {  // Validar el codigo status que responde Axios
        swa.fire(
          'Excelente!!!',
          'Te has Logueado',
          'success'
        )
        sessionStorage.setItem("accessToken", response.data.accessToken)
        //setRedirect(true)
      }
    }catch(err){
      // Cuando un campo del formulario tiene un formato incorrecto
      if (err.response.status == 400)
        swa.fire(
          'Vaya!!!',
          `${err.response.data.message}`,
          'error'
        )
      // Cuando las credenciales son invalidas
      if (err.response.status == 401)
        swa.fire(
          'Vaya!!!',
          `${err.response.data.message}`,
          'error'
        )
      // Cuando hay un error en la BBDD o en la API Backend
      if (err.response.status == 500)
        swa.fire(
          'Vaya!!!',
          `${err.response.data.message}`,
          'error'
        )
    }
  }

  //On success Log In

  
  return (
    <>
      <section className="book_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col">
              <form className="col-lg-6" onSubmit={onFormSubmit}>
                <h4>
                  INICIAR <span>SESIÓN</span>
                </h4>
                <div className="form-row col-lg-12">
                  <div className="form-group col-lg-12">
                    <label htmlFor="inputUser">Usuario</label>
                    <input type="text" className="form-control" id="inputUser" placeholder="" name="user" value={user.user} onChange={writeText} />
                  </div>
                </div>

                <div className="form-row col-lg-12">
                  <div className="form-group col-lg-12">
                    <label htmlFor="inputPassword">Contraseña</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="" name="password" value={user.password} onChange={writeText} />
                  </div>
                </div>

                <div className="btn-box">
                  <button type="submit" className="btn">Iniciar Sesión</button>
                </div>
                <p style={{marginTop: "10px"}}>No tienes cuenta? <Link to="/signUp">Create una</Link></p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default LogIn