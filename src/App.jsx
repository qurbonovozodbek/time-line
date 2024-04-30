import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'
import Uzbek from './component/Uzbek'
import Rus from './component/Rus'
import English from './component/English'

function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Uzbek></Uzbek>}></Route>
          <Route path='/Rus' element={<Rus></Rus>}></Route>
          <Route path='/English' element={<English></English>}></Route>
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
