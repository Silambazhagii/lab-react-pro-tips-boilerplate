import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import RegistrationForm from './Components/RegistrationForm'
import './App.css'

function App() {

  return (
    <>
     <nav>
        <ul>
          <li>
            <Link className="kalvium" to="/">KALVIUM❤️</Link>
          </li>
          <div>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/registrationForm">RegistrationForm</Link>
            </li>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrationForm" element={<RegistrationForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
