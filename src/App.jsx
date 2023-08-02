import './sass.scss'
import { Link, Route, Routes } from "react-router-dom"
import  Home  from './components/Home'
import  About  from './components/About'
import  Contact  from './components/Contact'
import  Login  from './components/Login'
import CareerPath from './components/CareerPath'
import SkillBasedPath from './components/SkillBasedPath'

export default function App() {
  return (
    <div>
      <nav className='nav' id='nav'>
        <ul className='nav-ul-first'>
          <li className='nav-li-first'>
            <Link className='nav-logo' to="/"><span id='D'>D</span><span id='e'>e</span><span id='v'>v</span><span id='S'>S</span><span id='y'>y</span><span id='n'>n</span><span id='c'>c</span></Link>
          </li>
        </ul>
        <ul className='nav-ul-middle'>
          <li className='nav-li-middle'>
            <Link className='nav-link' to="/careerpath">Career Path</Link>
          </li>
          <li className='nav-li-meddle'>
            <Link className='nav-link' to="/skillbasedpath">Skill Based Path</Link>
          </li>
        </ul>
        <ul className='nav-ul-last'>
          <li className='nav-li-last'>
            <Link className='nav-link' to="/about">About</Link>
          </li>
          <li className='nav-li-last'>
            <Link className='nav-link' to="/contact">Contact</Link>
          </li>
          <li className='nav-li-last'>
            <Link className='nav-link' to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path='/careerpath/*' element={<CareerPath />} />
        <Route path='/skillbasedpath' element={<SkillBasedPath />} />
      </Routes>
    </div>
  )
}
