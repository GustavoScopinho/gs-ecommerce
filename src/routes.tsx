import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Receipt } from './pages/Receipt/Receipt'

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comprovante" element={<Receipt />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
