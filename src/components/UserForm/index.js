import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Input, Title, Error, Form } from './style'
import { SubmmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, error, disable }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form disabled={disable} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disable} type='text' placeholder='email...' {...email} />
        <Input disabled={disable} type='password' placeholder='password...' {...password} />
        <SubmmitButton>{title}</SubmmitButton>
        {
          error && <Error>{error}</Error>
        }
      </Form>
    </>
  )
}
