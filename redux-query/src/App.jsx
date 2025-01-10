import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './pages/Categories'
import Mainlayout from './layouts/Mainlayout'
import Wishlist from './pages/wishlist'
import AddCategory from './pages/Add/add'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route index element={<Categories />} />
          <Route path='/add' element={<AddCategory />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Route>

      </Routes>

    </>
  )
}

export default App