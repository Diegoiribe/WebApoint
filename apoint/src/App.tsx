import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import './App.css'
import HomeTwo from './pages/HomeTwo'

function AppContent() {
  const location = useLocation()

  return (
    <>
      {/* Renderizar el Header solo si la ruta no es /dashboard */}
      {location.pathname !== '/dashboard' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeTwo />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  )
}

export default App
