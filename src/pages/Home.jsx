import About from "../components/home/About"
import Book from "../components/home/Book"
import Treatment from '../components/home/Treatment'
import Team from '../components/home/Team'
import Client from '../components/home/Client'
import Footer from "../components/various/Footer"
import Slider from '../components/various/Slider'
import Contact from "../components/home/Contact"

const Home = () => {
  return (
    <>
      <div className="hero_area">
        <Slider></Slider>
      </div>
      <Book></Book>
      <About></About>
      <Treatment></Treatment>
      <Team></Team>
      <Client></Client>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default Home