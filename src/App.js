// import logo from './logo.svg';
// import './App.css';
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


      <div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    </div>
  );
}

export default App;
