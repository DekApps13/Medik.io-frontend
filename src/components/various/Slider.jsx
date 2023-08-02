
const Slider = () => {
  return (
    <section className="slider_section ">
      <div className="dot_design">
        <img src="images/dots.png" alt=""/>
      </div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Mico <br/>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p>
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    </p>
                    <a href="">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Mico <br/>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p>
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    </p>
                    <a href="">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Mico <br/>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p>
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    </p>
                    <a href="">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
            <img src="images/prev.png" alt=""/>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
            <img src="images/next.png" alt=""/>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

    </section>
  )
}

export default Slider