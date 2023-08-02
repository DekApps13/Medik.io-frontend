import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import LogOut from './pages/LogOut'
import RegChat from './pages/RegChat'
import NoAccess from './pages/NoAccess'
import NotFound from './pages/NotFound'
import ListChat from './pages/ListChat'
import Navbar from './components/various/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='/logIn' element={<LogIn></LogIn>}></Route>
          <Route path='/logOut' element={<LogOut></LogOut>}></Route>
          <Route path='/regChat' element={<RegChat></RegChat>}></Route>
          <Route path='/listChat' element={<ListChat></ListChat>}></Route>
          <Route path='/noAccess' element={<NoAccess></NoAccess>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App