import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button, Input } from 'components/ui-kit'
import { LogoIcon } from 'assets/icons'
import { useDispatch, useSelector } from 'hooks/redux'
import { hasAuthErrorSelector, isAuthLoadingSelector } from 'modules/auth/selectors'
import { logIn } from 'modules/auth/actions'
import { usePrevious } from 'hooks/use-previous'

import type { InputOnChangeEventType } from 'components/ui-kit'
import type { LogIn as LogInType } from 'types/authentication'

import './index.scss'

export const Login = () => {
  const [form, setForm] = useState<LogInType>({ email: '', password: '' })

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const isLoading = useSelector(isAuthLoadingSelector)
  const hasError = useSelector(hasAuthErrorSelector)

  const wasLoading = usePrevious(isLoading)

  const onChange = useCallback((event: InputOnChangeEventType) => {
    setForm(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }, [])

  const onSubmit = useCallback(
    event => {
      event.preventDefault()
      dispatch(logIn(form))
      navigate('/') // TODO: add this in an useEffect after action success
    },
    [dispatch, form, navigate]
  )

  useEffect(() => {
    if (wasLoading && !isLoading && !hasError) {
      // TODO: add this in an useEffect after action success
    }
  }, [hasError, isLoading, navigate, wasLoading])

  return (
    <section className="login-wrapper">
      <form className="login-content" onSubmit={onSubmit}>
        <div className="logo">
          <LogoIcon />
          <h1 className="logo-text">InTracking</h1>
        </div>
        <Input className="email" name="email" label="Email" onChange={onChange} />
        <Input className="password" name="password" label="Senha" onChange={onChange} />
        <Button className="sign-up" theme="secondary" to="/sign-up">
          Cadastrar
        </Button>
        <Button type="submit" className="login">
          Acessar
        </Button>
        <Link className="forgot-password" to="/login">
          Esqueci minha senha
        </Link>
      </form>
    </section>
  )
}

export default Login
