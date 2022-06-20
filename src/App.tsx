import { Routes, Route } from 'react-router-dom'

import { Header } from 'components'
import { Home, Login, Reports, SignUp } from 'pages'

import './styles/settings.scss'
import { getToken } from 'utils/get-token'

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            !!getToken() ? (
              <>
                <Header />
                <Home />
              </>
            ) : (
              <Login />
            )
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
