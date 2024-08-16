import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardRoute from './routes/dashboarard.route'
import Header from './components/header.component'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} >
          <Route index element={<DashboardRoute />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
