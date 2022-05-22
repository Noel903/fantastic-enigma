import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AccountStuff from './components/AccountStuff'
import Home from './components/Home'
import Login from './components/Login'
import Posts from './components/Posts'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/posts" exact element={<Posts />} />
          <Route path="/account" exact element={<AccountStuff />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
