import { Button, Input } from 'components/ui-kit'
import { LogoIcon } from 'assets/icons'

import './index.scss'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <section className="login-wrapper">
      <form className="login-content">
        <div className="logo">
          <LogoIcon />
          <h1 className="logo-text">InTracking</h1>
        </div>
        <Input className="email" name="email" label="Email" />
        <Input className="password" name="password" label="Senha" />
        <Button className="sign-up" theme="secondary" to='/sign-up'>
          Cadastrar
        </Button>
        <Button className="login">Acessar </Button>
        <Link className="forgot-password" to="/login">
          Esqueci minha senha
        </Link>
      </form>
    </section>
  )
}

export default Login
