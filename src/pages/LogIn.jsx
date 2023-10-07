import Footer from '../components/various/Footer'

const LogIn = () => {
  return (
    <>
      <section className="book_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col">
              <form className="col-lg-6">
                <h4>
                  INICIAR <span>SESIÓN</span>
                </h4>
                <div className="form-row col-lg-12">
                  <div className="form-group col-lg-12">
                    <label htmlFor="inputUsuario">Usuario</label>
                    <input type="text" className="form-control" id="inputUsuario" placeholder="" />
                  </div>
                </div>

                <div className="form-row col-lg-12">
                  <div className="form-group col-lg-12">
                    <label htmlFor="inputPhone">Contraseña</label>
                    <input type="password" className="form-control" id="inputPhone" placeholder="" />
                  </div>
                </div>

                <div className="btn-box">
                  <button type="submit" className="btn ">Submit Now</button>
                </div>
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