/* eslint-disable react-hooks/exhaustive-deps */
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'
import fetchApi from '../../../util/fetchApi'

function FormContacto ({ onData, onError, onLoading }) {
  const [flag, setFlag] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  })
  const [validated, setValidated] = useState(false)

  useEffect(() => {
    if (flag) {
      fetchApi(formData, (data) => {
        setFlag(false)
        onData(data)
        onLoading(false)
      }, (err) => {
        setFlag(false)
        onError(err)
        onLoading(false)
      }
      )
    }
  }, [flag])

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      onError({ message: 'Porfavor, complete los datos que faltan.' })
      setValidated(true)

      return
    }
    onLoading(true)
    setFlag(true)
  }

  const handleChange = (change) => {
    setFormData(change)
  }
  return (
    <Form
      noValidate
      validated={validated}
      className='form-contacto'
      id='form-contacto'
      onSubmit={handleSubmit}
    >
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='nombre'>Nombre (Requerido)</Form.Label>
        <Form.Control
          id='nombre'
          required
          onChange={(e) => {
            handleChange({ ...formData, nombre: e.target.value })
          }}
          type='text'
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='correo'>
          Correo Electronico (Requerido)
        </Form.Label>
        <Form.Control
          id='correo'
          required
          onChange={(e) => {
            handleChange({ ...formData, correo: e.target.value })
          }}
          type='email'
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='asunto'>Asunto</Form.Label>
        <Form.Control
          id='asunto'
          onChange={(e) => {
            handleChange({ ...formData, asunto: e.target.value })
          }}
          type='text'
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='mensaje'>Mensaje (Requerido)</Form.Label>
        <Form.Control
          id='mensaje'
          required
          onChange={(e) => {
            handleChange({ ...formData, mensaje: e.target.value })
          }}
          as='textarea'
          rows={9}
        />
      </Form.Group>
      <Button variant='success' type='submit' disabled={flag}>
        Enviar
      </Button>
    </Form>

  )
}

export default FormContacto
