import { useState } from "react"
import axios from 'axios'
import Footer from "../components/various/Footer"
import swa from 'sweetalert2'

const RegChat = () => {
  //Inicializa la variable y su método 'set'
  const [chatgptPrompt, setChatgptPrompt] = useState({mensaje: ''})
  const [resSection, setResSection] = useState('')

  //Metodo para actualizar el texto de los inputs
  const writeText = (event) => {
    setChatgptPrompt({...chatgptPrompt, [event.target.name]: event.target.value})
  }

  //Metodo para enviar la petición a la API de Node
  const onFormSubmit = async (event) => {
    event.preventDefault()
    
    //Llamado a la API de Backend
    try {
      const URL = "http://localhost:8080/chatgpt/"
      const CONFIG = { headers: {'Content-Type': 'application/json',
                                 'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`} }
      const response = await axios.post(URL, chatgptPrompt, CONFIG)
      if (response.status == 200) {
        swa.fire(response.data.mensaje)
        setResSection(response.data.mensaje)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (<>
    <section className="contact_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container p-4 m-0">
          <h2>
            CONSULTALE A CHATGPT
          </h2>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="form_container">
              <form onSubmit={onFormSubmit}>
                <div className="btn-box container">
                  <textarea name="mensaje" value={chatgptPrompt.mensaje} onChange={writeText} type="text" className="w-100 p-3 border-0 rounded-lg shadow" placeholder="Escribe tu pregunta aquí..." rows="6"></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="my-3"> CONSULTAR </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-box">
              <img src="images/contact-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="contact_section layout_padding-bottom">
      <div className="container">
        {resSection}
      </div>
    </section>
    <Footer></Footer>
    </>)
}

export default RegChat