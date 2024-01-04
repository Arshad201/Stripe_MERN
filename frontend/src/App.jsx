import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Cancel from './Pages/Cancel';
import Success from './Pages/Success';

const App = () => {

    
  return (
    <div>
        <BrowserRouter>
      <Routes>
       <Route exact path='/' element={<Home/>} />
       <Route exact path='/cancel' element={<Cancel/>} />
       <Route exact path='/success' element={<Success/>} />
      </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
