import { useCallback, useState } from 'react'

import { Button, Input } from 'components/ui-kit'
import { LogoIcon } from 'assets/icons'
import { useDispatch, useSelector } from 'hooks/redux'
import { signUp } from 'modules/auth/actions'
import { userTokenSelector } from 'modules/auth/selectors'
import { SignUp as SignUpType } from 'types/authentication'

import type { InputOnChangeEventType } from 'components/ui-kit'

import './index.scss'

export const SignUp = () => {
  const [form, setForm] = useState<SignUpType>({ name: '', email: '', password: '' })

  const dispatch = useDispatch()
  const token = useSelector(userTokenSelector)

  const onChange = useCallback((event: InputOnChangeEventType) => {
    setForm(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }, [])

  const onSubmit = useCallback(
    event => {
      event.preventDefault()
      dispatch(signUp(form))
    },
    [dispatch, form]
  )

  console.log({ token })

  return (
    <section className="login-wrapper">
      <form className="login-content">
        <div className="logo">
          <LogoIcon />
          <h1 className="logo-text">InTracking</h1>
        </div>
        <Input className="name" name="name" label="Nome" onChange={onChange} />
        <Input className="email" name="email" label="Email" onChange={onChange} />
        <Input className="password" name="password" label="Senha" onChange={onChange} />
        <Button className="back" theme="secondary" to="/login">
          Voltar
        </Button>
        <Button className="login" type="button" onClick={onSubmit}>
          Cadastrar
        </Button>
      </form>
    </section>
  )
}

export default SignUp
