import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './Pages/Home';


function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          {/* <Route path='/' element={<HomePage />}/> */}
          <Route path='/' element={<Home />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


