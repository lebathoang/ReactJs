import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'

function App() {

  return (
    <div>
      <div className="App" style={{ padding: 10 }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Avengers</Link>
            </li>
            <li>
              <Link to="/News"> News Avengers</Link>
            </li>
            <li>
              <Link to="/Contact"> Contact Avengers</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/News' element={<NewsPage />} />
          <Route path='/Contact' element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  )
}