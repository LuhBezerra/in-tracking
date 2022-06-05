import { Button, Input } from 'components/ui-kit'
import { LogoIcon } from 'assets/icons'

import './index.scss'

export const SignUp = () => {
  return (
    <section className="login-wrapper">
      <form className="login-content">
        <div className="logo">
          <LogoIcon />
          <h1 className="logo-text">InTracking</h1>
        </div>
        <Input className="name" name="name" label="Nome" />
        <Input className="email" name="email" label="Email" />
        <Input className="password" name="password" label="Senha" />
        <Button className="back" theme="secondary" to='/login'>
          Voltar
        </Button>
        <Button className="login">Cadastrar </Button>
      </form>
    </section>
  )
}

export default SignUp
