import { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Read } from './components/Read'
import { Update } from './components/Update'
import { Create } from './components/Create'
function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}> </Route>
                <Route path='/create' element={<Create/>}> </Route>
                <Route path='/read/:id' element={<Read/>}> </Route>
                <Route path='/update/:id' element={<Update/>}> </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
