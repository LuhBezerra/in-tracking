import { Routes, Route } from 'react-router-dom'

import { Header } from 'components'
import { Home, Login, Reports, SignUp } from 'pages'

import './styles/settings.scss'

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/reports"
          element={
            <>
              <Header />
              <Reports />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </main>
  )
}

export default App
