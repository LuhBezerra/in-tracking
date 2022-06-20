import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Input } from 'components/ui-kit'
import { LogoIcon } from 'assets/icons'
import { useDispatch, useSelector } from 'hooks/redux'
import { signUp } from 'modules/auth/actions'
import { SignUp as SignUpType } from 'types/authentication'
import { hasAuthErrorSelector, isAuthLoadingSelector } from 'modules/auth/selectors'
import { usePrevious } from 'hooks/use-previous'

import type { InputOnChangeEventType } from 'components/ui-kit'

import './index.scss'

export const SignUp = () => {
  const [form, setForm] = useState<SignUpType>({ name: '', email: '', password: '' })

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
      dispatch(signUp(form))
    },
    [dispatch, form]
  )

  useEffect(() => {
    if (wasLoading && !isLoading && !hasError) {
      navigate('/')
    }
  }, [hasError, isLoading, navigate, wasLoading])

  return (
    <section className="login-wrapper">
      <form className="login-content" onSubmit={onSubmit}>
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
        <Button className="login" type="submit">
          Cadastrar
        </Button>
      </form>
    </section>
  )
}

export default SignUp
