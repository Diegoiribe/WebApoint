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

function Layout() {
  const location = useLocation()
  return <>{location.pathname !== '/dashboard' && <Header />}</>
}

function App() {
  return (
    <div className="App">
      <Router>
        {/* Usa el Layout para manejar Header */}
        <Layout />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomeTwo />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
