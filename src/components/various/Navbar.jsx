import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 123455678990
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : demo@gmail.com
              </span>
            </a>
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
          </div>
        </div>
      </div>


      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            
            <Link className="navbar-brand" to="/">
              <img src="images/logo.png" alt=""/>
            </Link>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/regChat">Consultar</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/listChat">Mis Consultas</Link>
                  </li>
                </ul>
              </div>

              
              <div className="quote_btn-container">
                <Link to="/logIn">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Log In
                  </span>
                </Link>
                <Link to="/signUp">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Sign Up
                  </span>
                </Link>
                <Link to="/logOut">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Log Out
                  </span>
                </Link>
                <form className="form-inline">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </header>
  )
}

export default Navbar